import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router'
export default function Home()
{
    var navigate = useNavigate();
    var data={};
    var [a, setA] = useState();
    var [b, setB] = useState();
    var [c, setC] = useState();
    var [d, setD] = useState();
    var [f, setF] = useState();
  var isvalid=true;
    async function handleform(e){
      data={};
      e.preventDefault();
      if (frm.fname.value.trim().length < 5) {
        setA('*Invalid');
        isvalid=false;
      } else {
        setA('');
        data['fname']=frm.fname.value;
      }
  
      if (frm.lname.value.trim().length < 5) {
        setB('*Invalid');
        isvalid=false;
      } else {
        setB('');
        data['lname']=frm.lname.value;
      }
  
      const r = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!r.test(frm.email.value)) {
        setC('*Invalid');
        isvalid=false;
      } else {
        setC('');
        data['email']=frm.email.value;
      }
  
      if (frm.pswd.value.trim().length < 5) {
        setD('*Invalid');
        isvalid=false;
      } else {
        setD('');
      }
  
      if (frm.confirm.value.trim().length < 5) {
        setF('*Invalid');
        isvalid=false;
      } else if (frm.confirm.value.trim() === frm.pswd.value.trim()) {
        setF('');
        data['pswd']=frm.pswd.value;
        console.log(data);
        if(isvalid){
        try{
        var res=await axios.post("http://localhost:5000/account",data);
        console.log(res);
        if(res.data=="ok")
        navigate('/Login')
      }
        catch(e){
          console.log(e);
        }
      } }else {
        setF('*Password Not Match');
      }
    }
    return(
      <div className="container-fluid" style={{backgroundColor:"rgb(88, 197, 213)"}}>    
           <div className="container bg-opacity-50 p-5 bg-light border border-2 border-white ">
        <div className="row justify-content-center align-items-center" style={{height:"86vh"}}>
          <div className="col-sm-7 " >
          <h1 className='pb-3'>Create Your Account</h1>
          <form onSubmit={handleform} id="frm">
       <div className="row">
        <Input type="text" id="fname" labelname="First Name" a={a}  />
        <Input type="text" id="lname" labelname="Last Name" a={b} />
       </div>
       <div className="row">
          <Input type="email" id="email" labelname="Email" placeholder='Username@gmail.com' a={c} />
       </div>
       <div className="row mt-1">
       <Input type="password" id="pswd" labelname="Password" a={d}  />
       <Input type="password" id="confirm" labelname="Confirm" a={f} />
       </div>
       <div className="row">
        <Button type="submit">Sign Up</Button>
        
       </div>
       </form>
          </div>
        </div>
       </div>
       </div>
    )
} 