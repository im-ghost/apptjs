import { 
  Paper , 
  Card ,
  Typography
} from "@mui/material";
import {
  Link,
  BrowserRouter as Router
} from "react-router-dom"


const Footer = () =>{
  return (
    <div className="rounded-3xl flex flex-row w-[80vw]  space-evenly  shadow-3xl absolute bottom-5 p-4 m-2">
    <Router>
    <Typography variant="h4">
    <Link to={`/`}>
    🏠
    </Link>
    </Typography>
    <Typography variant="h4">
   <Link to={`/appointments`}>
    📅
   </Link> 
    </Typography>
  
    <Typography variant="h4">
    <Link to={`auth/profile`}>
    🙎
    </Link>
    </Typography>
    </Router>
   
    </div>
    
    )
}

export default Footer