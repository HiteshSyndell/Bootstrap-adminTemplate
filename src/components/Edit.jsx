import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Edit = () => {
    const [userapi,setUserapi]=useState([])
    let {id}=useParams()
    const userdatabyid=async()=>{
        const userdata=await axios.get(`http://localhost:5000/${id}`)
        let user=await userdata.data
        setUserapi(user[0])
    }

    console.log(id)
    const {name,username,email,mobile}=userapi

    useEffect(()=>{
        userdatabyid()
    },[])

    let userChange=(e)=>{
        setUserapi({...userapi,[e.target.name]:e.target.value})
    }

    const updateUser=async()=>{
        await axios.put(`http://localhost:5000/${id}`,userapi);
    }
  return (
    <>
    <div className='row'>
        <div className='col-lg-12'>

            <div className='backbtn mb-3'>
            <Link to="/">
            <button className='btn btn-primary'>
                Back
            </button>
            </Link>
            </div>
            

            <div className='userData'>

                <div className='name'>
                <label htmlFor='name'>
                    Name 
                </label>
                    <input type='text' className='form-control' name='name' value={name} onChange={(e)=>userChange(e)} placeholder="Edit Name" id='name'/>
                </div>

                <div className='username'>
                <label htmlFor='username'>
                    Username 
                </label>
                    <input type='text' className='form-control' name='username' value={username}  onChange={(e)=>userChange(e)} placeholder="Edit Username" id='username'/>
                </div>

                <div className='email'>
                <label htmlFor='email'>
                    Email 
                </label>
                    <input type='email' className='form-control' name='email' value={email} onChange={(e)=>userChange(e)}  placeholder="Edit Email" id='email'/>
                </div>

                <div className='mobile'>
                <label htmlFor='mobile'>
                    Mobile 
                </label>
                    <input type='number' className='form-control' name='mobile' value={mobile} onChange={(e)=>userChange(e)}  placeholder="Edit Mobile" id='mobile'/>
                </div>

                <Link to="/"className=' float-right' onClick={updateUser}>
            <button className='btn btn-success mt-3'>
                Update
            </button>
            </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Edit