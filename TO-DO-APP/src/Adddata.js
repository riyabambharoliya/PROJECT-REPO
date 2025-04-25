import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addusers } from './reduser'


function Adddata() {

  const user = useSelector(state=>state.num)
  console.log(user);
  
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const nav = useNavigate()
  const dispatch = useDispatch()

  const handladd = (e)=>{
    e.preventDefault();
    dispatch(addusers({id:user.length+1,name,email}))
    nav('/')
  }

  
  return (
    <div>
        <div>
            <h1>add your data</h1>
        </div>
        <form onSubmit={handladd}> 
           <div>
           <label> name : </label>
           <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
           </div>
           <div>
           <label> email : </label>
           <input type='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/> 
           </div>
           <button type='submit'> submit</button>
        </form>
        <Link to={'/'}>go back</Link>
    </div>
  )
}

export default Adddata