import React,{useState} from 'react'
export default function Input({labelname,id,type,placeholder,a})
{
    return(
        <>
        <div className="col ">
          <label htmlFor={id}>{labelname} <span className="text-danger">{a}</span> </label>
          <input type={type} className='form-control' id={id} placeholder={placeholder}  name={id}/>
        </div>
        </>
    )
} 