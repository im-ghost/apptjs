import {
  Card,
  Typography
} from "@mui/material"


const Appointment = ({appointment})=>{
  return(
    <Card>
    <Typography variant="h3">{appointment.name}</Typography>
    </Card>
    )
}

export default Appointment;