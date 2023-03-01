import Doctor from "./Doctor"


const  Doctors = ({doctors}) => {
  
  return (
    <div className="flex space-x-8 justify-items-stretch">
     {
       doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id}/>)
     }
    </div>
    )
}
export default Doctors