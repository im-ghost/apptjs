
import { api } from "../../app/hooks"
//import { useSelector } from "react-redux"
const BASE_URL = "http://localhost:5000/api"

const fetchUsers = async ()=>{
    
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const user = JSON.parse(authToken)
   const users = await api.get(`${BASE_URL}/users`,user.token)
    console.log(users)
    return users
}
    else{
      throw new Error("not authorized ")
    }
}

const delUser = async (id)=>{
    
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const user = JSON.parse(authToken)
    await api.delete(`${BASE_URL}/users`,id,user.token)
    return {
      status:200,
      message:"Appointment deleted"
    }
}
    else{
      throw new Error("not authorized ")
    }
}

const loginUser = async (user)=>{
   const userr = await fetch(`${BASE_URL}/users/user/login`,{
        method:"POST",
        headers:{
        'Content-Type':'application/json' 
             },
        body:JSON.stringify(user)
    })
    return userr
}

const registerUser = async (payload)=>{
   const userr = await fetch(`${BASE_URL}/users/`,{
        method:"POST",
        headers:{
        'Content-Type':'application/json' 
             },
        body:JSON.stringify(payload)
    })
    return userr
}

const updateUser = async ({id,user})=>{
  const body = {
   body:{
     
   id:id,
    user:user
}
  }
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const user = JSON.parse(authToken)
   const userr = await api.put(`${BASE_URL}/users`,body,user.token)

    return userr
}
    else{
      throw new Error("not authorized ")
    }
}

const fetchUser = async (id)=>{
    
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const user = JSON.parse(authToken)
   const users = await api.get(`${BASE_URL}/users/user/${id}`,user.token)
    return users
}
    else{
      throw new Error("not authorized ")
    }
}





export {
    fetchUsers,
    fetchUser,
    loginUser,
    registerUser,
    updateUser,
    delUser,
    BASE_URL
}