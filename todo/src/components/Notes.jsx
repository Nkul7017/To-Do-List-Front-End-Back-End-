import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import axios from 'axios'
function Notes() {
  const [a, setA] = useState('');
  const [b, setB] = useState([]);
  const [index, setI] = useState();
 var {id}=useParams();
  var navigate=useNavigate();
  function handle(e)
  {
  setB([...b,a])
  setA("");
  }
  function Delete(i)
  {
  b.splice(i,1);
  setB([...b]);
  }
  function Edit(i)
  { setA('')
    b1.style.display;
    enter.focus();
    setA(b[i])
    b1.style.display="none";
    b2.style.display="block";
    setI(i);
  }
  function handleUpdate()
  {
    console.log(index)
   b[index]=a;
   setB([...b])
   b2.style.display="none";
    b1.style.display="block";
   setA('');

  }
  async function save(){
    await axios.patch(`http://localhost:5000/account/${id}`,{b});
    navigate(`/Mynotes/${id}`);
  }
  return (
      <>
      <div className="container-fluid " style={{backgroundColor:"blue"}}>
      <div className="container w-100 container bg-opacity-50  bg-light border border-2 border-white " >
        <div className="row justify-content-center" style={{height:"100vh"}}>
        <div className="col-sm-8 mt-5 ">
        <h1 className='text-center fw-bolder text-decoration-underline '>Create Notes</h1>
          <input type="text" className='form-control d-inline w-100 bg-black text-white mt-2 ' id="enter" value={a} onChange={(e)=>setA(e.target.value)} />
          <div className="d-flex justify-content-center">
              <button className="btn btn-primary w-25 mt-3 mx-auto" id='b1' onClick={handle}>Add</button>
              <button className="btn btn-primary w-25 mt-3 mx-auto" id="b2" style={{display:"none"}} onClick={handleUpdate}>Update</button>
            </div>
            <div >
            <table className='table table-light table-borderless table-hover mt-5 table-responsive-sm  '>
              <tbody>            
                {
                  b.map((v,i)=>(
                    <tr>
                      <td >
                      <li type="circle" key={i}>{v}</li>
                      </td>
                      <td ><button className='btn text-primary btn-sm' onClick={()=>Delete(i)} >Delete</button> <button className='btn text-primary btn-sm' onClick={()=>Edit(i)}>Edit</button></td>
                    </tr>
                  ))
                }
             
                </tbody>
                </table>
                {b.length>0&&
                 <div className="d-flex justify-content-center">
              <button className='btn text-black btn btn-primary float-end' onClick={save}>Save</button>
              </div>
              }
             
            </div>
        </div>
        </div>
      </div>
      </div>
      </>
  )
}

export default Notes
