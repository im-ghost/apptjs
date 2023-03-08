import {
  useNavigate
} from "react-router-dom"
import {
  Card,
  Typography
} from "@mui/material"
const Specialties = ({specialties})=>{
  console.log(specialties)
  const navigate = useNavigate()
  return(
   <div>
   {
   specialties.map(spec =>
   ( <Card className="">
   
    <Typography variant="h5">
   <div onClick={()=>navigate(`/specs/${spec}`)} className="bg-red-100 m-2 border-groove border border-4">
     {spec}
   </div>
    </Typography>

   </Card>)
   )
     
   }
   </div>
    )
}
export default Specialties