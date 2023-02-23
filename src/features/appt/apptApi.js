
import { api } from "../../app/hooks"
//import { useSelector } from "react-redux"
const BASE_URL = "http://localhost:5000/api";
const fetchAppointments = async ()=>{
  
    const authToken= localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const user = JSON.parse(authToken)
    const appointments =   await api.get(`${BASE_URL}/appointments/`,user.token)
    return appointments
 }
    else{
      throw new Error("not authorized ")
    }
}

const delAppointment = async (id)=>{
    
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const user = JSON.parse(authToken)
      await api.delete(`${BASE_URL}/users/user/${id}`,
        id,
        user.token
      )
    return {
      status:200,
      message:"Appointment deleted"
    }
    }
    else{
      throw new Error("not authorized ")
    }
}

const fetchDoctorAppointment = async (id)=>{
     
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
    const user = JSON.parse(authToken)
       const doctor = await api.delete(`${BASE_URL}/users/user/${id}`, id,user.token)
    return doctor.appointments
    }
    else{
      throw new Error("not authorized ")
    }
  
}

const fetchUserAppointment = async (id)=>{
  
    const authToken = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
  const user:USER = JSON.parse(authToken)
       const { appointments } = await api.delete<USER>(`${BASE_URL}/users/user/${id}`, id,user.token)
    return appointments
    }
    else{
      throw new Error("not authorized ")
    }
  
}

const updateAppointment = async ({id, appointment}:{id:string, appointment: APPOINTMENT})=>{
   const body ={
   body:{
    id:id,
    appointment: appointment 
   }
  }
    const authToken:AUTHTOKEN = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
   const user:USER = JSON.parse(authToken)
   const appt = await api.put<APPOINTMENT>(`${BASE_URL}/appointments/appointment/${id}`,body,user.token)
}
    else{
      throw new Error("not authorized ")
    }
}

const fetchAppointment = async (id:any)=>{
    
    const authToken:AUTHTOKEN = localStorage.getItem("appt-app-user")
    if(typeof(authToken) === "string"){
  const user : USER= JSON.parse(authToken)
   const appt = await api.get<APPOINTMENT>(`${BASE_URL}/appointments/appointment/${id}`,user.token )
}
    else{
      throw new Error("not authorized ")
    }
}






export {
  fetchAppointment,
  fetchUserAppointment,
  fetchDoctorAppointment,
  fetchAppointments,
  delAppointment,
  updateAppointment 
} 