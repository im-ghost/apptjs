import Doctor from "./Doctor"


export default function Doctors({doctors}) {
  return (
    <div className="flex space-x-8 justify-items-stretch">
     {
       doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id}/>)
     }
    </div>
    )
}