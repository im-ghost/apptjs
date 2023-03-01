import {
  Typography 
} from "@mui/material"
import {
  Link,
  BrowserRouter as Router
} from "react-router-dom"

const Authenticate = () =>{
  
  return(
    <div className="">
     <Typography variant = "h3">
     Welcome to my Appt
     </Typography>
     <Typography variant="body1">Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real Lorem Ipsum dolor en la vida real </Typography>
     <Router>
     <Typography variant="h6">
     <Link to={`/signin`}>Sign In</Link>
     </Typography>
     </Router>
    </div>
    )
}
export default Authenticate;