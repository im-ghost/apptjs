import { 
  Typography
} from "@mui/material";
import {
  useNavigate
} from "react-router-dom"


const Footer = () =>{
  const navigate = useNavigate();
  return (
    <div className="rounded-3xl flex flex-row w-[80vw]  space-evenly  shadow-3xl absolute bottom-5 p-4 m-2 space-x-8 justify-items-stretch">
    <Typography variant="h4" onClick={()=>navigate(`/`)}>
    🏠
    </Typography>
    <Typography variant="h4" onClick={()=>navigate(`/appointments`)}>
    📅
    </Typography>
  
    <Typography variant="h4" onClick={()=>navigate(`auth/profile`)}>
    🙎
    </Typography>
   
    </div>
    
    )
}

export default Footer