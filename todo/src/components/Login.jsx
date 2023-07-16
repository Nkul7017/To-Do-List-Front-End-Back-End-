import React,{useState} from 'react'
import axios from 'axios'
import Linkk from './Linkk'
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router'
export default function Login()
{
   var navigate=useNavigate(); 
   var data={};
    var [c, setC] = useState();
    var [d, setD] = useState();
    var isvalid=true;
    async function handle(e)
    {e.preventDefault();
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
        data['password']=frm.pswd.value;
        if(isvalid)
        {var res=await axios.post('http://localhost:5000/account/validate',data);
        console.log(res.data)
        if(res.data[0]=="ok")
        navigate(`/Mynotes/:${res.data[1]}`);}
      }
     
    }
    return(
      <div className="container-fluid" style={{backgroundColor:"rgb(88, 197, 213)"}}>    
           <div className="container bg-opacity-50  bg-light border border-2 border-white ">
        <div className="row justify-content-center align-items-center" style={{height:"100vh"}}>
          <div className="col-sm-7">
          <h1 className='mb-2'>Login To Your Account</h1>
          <form onSubmit={handle} id="frm">
       <div className="row">
        <Input type="email" id="email" labelname="Email" placeholder="Username@gmail.com" c={c} />
       </div>
       <div className="row mt-1">
       <Input type="password" id="pswd" labelname="Password" d={d} />
       </div>
       <div className="row">
       <Button type="submit">Login</Button>
        <Linkk route='/Create'>Create Account</Linkk>
       </div>
       </form>
          </div>
        </div>
       </div>
       </div>
    )
}