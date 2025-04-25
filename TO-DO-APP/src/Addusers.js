import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo } from './reduser'

function Addusers() {

 const users = useSelector(state=>state.num)
 const displatch = useDispatch()
 const nav = useNavigate()

 const handledlt = (id)=>{
  displatch(deletetodo({id}))
 }

 const edit = (id)=>{
    // alert(id)
    alert("sdjfh")
    nav('/edit/'+id)
 }

  return (
  <div>
    <h1>user data</h1>
  <Link to={'/add'}>add</Link>
    <div className='container my-3'>
      
      <div className="row justify-content-center" >
        <div className='col-xl-6'>
        <table className='table'> 
        <thead className='table'>
            <tr> 
                <th> id</th>
                <th> name</th>
                <th> email</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody> 
            {users.map((data)=>(
               <tr key={data.id}> 
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td><button className='btn btn-warning m-2' onClick={()=>{edit(data.id)}}> edit</button>
                <button className='btn btn-success' onClick={()=>{handledlt(data.id)}}> delete</button>
                </td>
               </tr> 
            ))}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Addusers
