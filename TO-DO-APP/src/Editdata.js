import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editdata } from './reduser'
import { useNavigate, useParams } from 'react-router-dom'


const Editdata = () => {
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const {id} = useParams()
    const nav = useNavigate()
   const displatch =  useDispatch()
    const edit = (e)=>{
        e.preventDefault()
        displatch(editdata({id:id,name,email}))
        nav('/')
    }
  return (
    <div> 
<form onSubmit={edit}> 
<div>
        <label> name :</label>
        <input type='text' onChange={(e)=>{setname(e.target.value)}}/>
      </div>

      <div>
        <label> email :</label>
        <input type='email' onChange={(e)=>{setemail(e.target.value)}}/> 
      </div>

      <div>
        <input type='submit'/>
      </div>
</form>
    </div>
  )
}

export default Editdata