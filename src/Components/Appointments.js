import Appointment from "./Appointment"

const Appointments = ({appointments}) =>{
  return (
    <div className="">
     {
       appointments.legth > 0 && appointments.map(appt=><Appointment appointment={appt} key={appt._id}/>)
       
     }
     
    </div>
    )
}

export default Appointments