
import {
  Typography
} from "@mui/material"

import { Link , BrowserRouter as Router } from "react-router-dom"


const Doctor = ({doctor}) =>{
  return(
    <div className="shadow-3xl rounded-xl ">
     <Router>
      <Link to={`/doctors/${doctor._id}`}>
       <figure className="">
         <img className="h-[70%] shadow rounded-2xl" src="%PUBLIC_URL%/logo192.png" alt="Doctor"/>
         <figcaption className="">
           <Typography variant="h5">{doctor.name}</Typography>
           <Typography variant="h6">{doctor.specialities}</Typography>
          </figcaption>
       </figure>
      </Link>
     </Router>
    </div>
    )
}
export default Doctor