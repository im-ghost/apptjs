
import {
  Typography
} from "@mui/material"

import {  useNavigate } from "react-router-dom"


const Doctor = ({doctor}) =>{
  const navigate= useNavigate()
  return(
    <div className="shadow-3xl rounded-xl ">
     
      <div onClick={()=>navigate(`/doctors/${doctor._id}`)}>
       <figure className="">
         <img className="h-[70%] shadow rounded-2xl" src="%PUBLIC_URL%/logo192.png" alt="Doctor"/>
         <figcaption className="">
           <Typography variant="h5">{doctor.name}</Typography>
           <Typography variant="h6">{doctor.specialities}</Typography>
          </figcaption>
       </figure>
      </div>
   
    </div>
    )
}
export default Doctor