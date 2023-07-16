const user=require('./model/accmodel')
const express=require('express')
const router=new express.Router();

router.post('/account',async(req,res)=>{
  console.log(req.body)
  try{   
    var ob=new user({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.pswd
    });
    await ob.save();
    res.status(201).send('ok');
  } catch (e) {
    if (e.code === 11000 && e.keyPattern.email) {
      res.status(400).send('Email already exists');
    } else {
      res.status(400).send(e);
    }
    console.log(e);
  }
});

router.post('/account/validate',async(req,res)=>{
  var r=await user.find(req.body);
  console.log(r);
  if(r.length==1) {
    res.send(["ok",r[0].id]);
  }
  res.send();
});

router.get('/account/:id',async(req,res)=>{
  const _id=req.params.id.substr(1);
  try {
    const res1 = await user.findById({_id:_id});
    if (!res1) {
      return res.status(404).send('User not found');
    }
    res.send(res1.data);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.delete('/account/:id/:i', async (req, res) => {
  const id = req.params.id.substr(1).trim();
  const i = parseInt(req.params.i.substr(1));
  try {
    const foundUser = await user.findById(id);
    if (!foundUser) {
      return res.status(404).send('User not found');
    }
    foundUser.data.splice(i, 1);
    const updatedUser = await foundUser.save(); 
    res.send(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.patch('/account/:id/:i', async (req, res) => {
  const _id = req.params.id.substr(1).trim();
  const i = parseInt(req.params.i);
  console.log(i)
  try {
    const foundUser = await user.findById(_id);
    console.log(foundUser);
    if (foundUser) {
      foundUser.data[i]=req.body.value; 
      await foundUser.save();
      res.send(foundUser);
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.patch('/account/:id/', async (req, res) => {
  const _id = req.params.id.substr(1).trim();
  try {
   await user.findOneAndUpdate(
      { _id: _id }, 
      { $push: { data: { $each: req.body.b } } },
      { new: true }
    );
    res.send();
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});
module.exports=router;