import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
import {
  Card,
  Typography
} from "@mui/material"
const Specialties = ({specialties})=>{
  return(
   <>
   {
   specialties.map(spec =>
   ( <Card className="">
   <Router>
    <Typography variant="h5">
   <Link to={`${spec._id}`}>
     {spec.name}
   </Link>
    </Typography>
   </Router>
   </Card>)
   )
     
   }
   </>
    )
}
export default Specialties