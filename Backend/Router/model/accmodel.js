const mongoose=require('mongoose')
const validator=require('validator')
const accountSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        uppercase:true
    },
    lname:{
        type:String,
        required:true,
        uppercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("email alreaddy exist");
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    data:{
        type:[String]
    }

})

module.exports=new mongoose.model("Account",accountSchema);
