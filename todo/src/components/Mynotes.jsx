import React, { useEffect, useState } from 'react'
import Linkk from './Linkk'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router';
function Notes() {
  const [b, setB] = useState([]);
  var navigate=useNavigate();
  var index;
  const {id}=useParams();
  var getdata=async()=>{
    console.log(id)
    var res=await axios.get(`http://localhost:5000/account/${id}`);
    console.log(res.data);
    setB(res.data);
  }
  useEffect(()=>{
    getdata();
  },[])
  function Edit(i)
  { 
    enter.style.display="block";
    b2.style.display="block";
    enter.value=b[i];
    enter.focus();
    index=i;
  }
  async function handleUpdate() {
    enter.style.display = "none";
    b2.style.display = "none";
    console.log(enter.value);
    var a = {
      value: enter.value
    };
    await axios.patch(`http://localhost:5000/account/${id}/${index}`, a);
    var res=await axios.get(`http://localhost:5000/account/${id}`);
    setB(res.data);
  }
  async function Delete(i)
  {
    console.log(i);
    await axios.delete(`http://localhost:5000/account/${id}/${i}`);
    var res=await axios.get(`http://localhost:5000/account/${id}`);
    setB(res.data);
  }
  function add()
  {
    navigate(`/Notes/${id}`);
  }
  return (
      <>
      <div className="container-fluid " style={{backgroundColor:"blue"}}>
      <div className="container w-100 container bg-opacity-50  bg-light border border-2 border-white ">
        <div className="row justify-content-center" style={{height:"100vh"}}>
        <div className="col-sm-8 mt-5 ">
        <center><h1 className='text-center fw-bolder text-decoration-underline '>To-Do-List</h1></center>
          <input type="text" className='form-control  w-100 bg-black text-white mt-2' style={{display:"none"}} id="enter" />
          <div className="d-flex justify-content-center">
             
              <button className="btn btn-primary w-25 mt-3 mx-auto" id="b2" style={{display:"none"}} onClick={handleUpdate}>Update</button>
            </div>
            <div >
            <table style={{backgroundColor:"blue"}} className='table table-borderless text-white table-hover mt-5 table-responsive-sm   fw-medium '>
              <tbody>            
                {
                  b.map((v,i)=>(
                    <tr>
                      <td >
                      <li type="circle">{v}</li>
                      </td>
                      <td ><button className='btn btn-sm btn-white' onClick={()=>Delete(i)}>Delete</button> <button className='btn  btn-sm ' onClick={()=>Edit(i)}>Edit</button></td>
                    </tr>
                  ))
                }
             
                </tbody>
                </table>
                
                 <div className="d-flex justify-content-center">
                 <button className='btn btn-dark ' onClick={add}>Add New</button>
              </div>
              
             
            </div>
        </div>
        </div>
      </div>
      </div>
      </>
  )
}

export default Notes
