import {
  Typography 
} from "@mui/material"
import {
  useNavigate
} from "react-router-dom"
import {
  useEffect
} from "react"
const Authenticate = () =>{
  const navigate = useNavigate()
  return(
    <div className="">
    <Typography variant = "h3">
     Welcome to my Appt
     </Typography>
     <Typography variant="body1">Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real</Typography>
      <div onClick={()=>{ navigate("/signin")}}>
         <Typography variant="h6">Sign In</Typography>
      </div>
    </div>
    )
}
export default Authenticate;