import React from 'react'
import { Link } from 'react-router-dom';
export default function Linkk({children,route})
{
    return(
        <>
        <div className="col mt-4">
        <Link className='btn btn-outline-primary' to={route}>{children}</Link>
        </div>
        </>
    )
}