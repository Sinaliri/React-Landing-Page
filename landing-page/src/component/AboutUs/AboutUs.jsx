import React from 'react';
import { useNavigate , Link, Outlet } from 'react-router-dom';


export default function AboutUs() {
    const navigate=useNavigate();
    const clickhandler= ()=>{
        navigate(-1)
        // navigate("/",{replace:true})
    }
  return (
    <div>
        <h1>AboutUs</h1>
        <button onClick={clickhandler}>go back</button>
        <ul>
            <li>
                <Link to="Programmers">Programmers</Link>
            </li>
            <li>
                <Link to="Drivers">Drivers</Link>
            </li>
        </ul>
        <Outlet/>
     
    </div>
  )
}
