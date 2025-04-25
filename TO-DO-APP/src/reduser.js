import { createSlice } from "@reduxjs/toolkit";
import { users } from "./data";

 const useslice = createSlice({
    name:"riya",
    initialState : users,
    reducers:{
        addusers :(state,action)=>{
            state.push(action.payload)
        },
        deletetodo :(state,action)=>{
         return state.filter(user=>user.id!==action.payload.id)  
        },
        editdata : (state,action) =>{
                const {id,name,email} = action.payload
                let userobj = state.find((user)=>{return user=>user.id===id})
                if(userobj)
                {
                    userobj.name = name;
                    userobj.email = email
                }
         }
    }
})

export const {addusers,deletetodo,editdata} = useslice.actions
export default useslice.reducer
