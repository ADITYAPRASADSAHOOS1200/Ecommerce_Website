import { createSlice } from "@reduxjs/toolkit";


const userRetrieve=JSON.parse(localStorage.getItem("authUser"))


export const authSlice=createSlice({

name:"auth",
initialState:{
    user:userRetrieve||{
        name:"",
        password:"",
        image:"",
       },
       authUser:false,
},
 
reducers:{

login:(state,action)=>{
    console.log("action",action.payload);
 const userId=action.payload;
console.log(userId);
const userValidation=/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(userId.name)

const userPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/.test(userId.password)

state.user=userId;
if(!userValidation || !userPassword){
    state.authUser=false
  }else{
    state.authUser=true
    const savestate=JSON.stringify(userId)
     console.log(savestate);
    localStorage.setItem("authUser",savestate)
  }
},

logout:(state)=>{
   
    state.user={
       name:"",
       password:"",
       image:"",
       authUser:false,
    }
   sessionStorage.removeItem();
  } 

}
})

export const {login,logout}=authSlice.actions
export default authSlice.reducer
