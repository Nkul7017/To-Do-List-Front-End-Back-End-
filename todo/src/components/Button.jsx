import React from 'react'
export default function Button({children,type})
{
    return(
        <>
         <div className="col mt-4">
          <button type={type} className='btn btn-outline-primary'>{children}</button>
        </div>
        </>
    )
}