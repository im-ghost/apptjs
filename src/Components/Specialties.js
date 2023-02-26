import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
import {
  Card,
  Typography
} from "@mui/material"
export default function Specialties({specialties}) {
  return(
   specialties.map(spec =>( <Card className="">
   <Router>
   <Link to={`${spec._id}`}>
    <Typography variant="h5">
     {spec.name}
    </Typography>
   </Link>
   </Router>
   </Card>))
    )
}
