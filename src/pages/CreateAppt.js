import {
  useEffect,
  useState
} from "react"
import  {
  useNavigate,
  useParams
} from "react-router-dom"
import { createAppointment } from "../../features/appt/apptSlice"

import { 
  useDispatch,
  useSelector
 } from "react-redux"
import {
  Typography,
  TextField,
  Box,
  Button
} from "@mui/material"

const CreateAppt =()=>{
 const [err,setError] = useState("")
 const [time,setTime] = useState("")
 const [times,setTimes] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
 const { id} = useParams()
  const { user , doctors } = useSelector(
    (state) => state.users
  )
  const {
    doctorTimeSlots,
    timeSlots
  } = useSelector(state=>state.appt)
  useEffect(() => {
    if (error) {
      setError(error.message)
    }
    if (isSuccess) {
      navigate('/')
    }
  }, [navigate,error, isSuccess,user])
  useEffect(()=>{
    if(doctors){
        const doctor = doctors.find(doc=>doc._id === id)
       if(doctor !== undefined) {
         setDoctor(doctor)
         dispatch(doctorTimeSlots(id))
       }
       else navigate("/")
    }
  },[doctors,dispatch])
  useEffect(()=>{
    if(timeSlots){
      setTimes(timeSlots)
    }
  },[timeSlots, dispatch])
  const create = async (e)=>{
    e.preventDefault();
   const data = {
     name:Date.now(),
     userId:user._id,
     doctorId:doctor._id,
     time:time
   }
   await dispatch(createAppointment(data))
  } 

  return(
    <div className="bg-blue-900 text-center flex flex-col justify-center  h-screen w-screen rounded-2xl border-none shadow-3xl">
    <Typography variant='h2'>
    Create an appointment with {doctor.name}
    </Typography>
    <Typography variant='h3' className="bg-red-900">
    {err}
    </Typography>
      <Box>

     <Button type='submit' onClick={create} className="sign__button">
     <Typography variant="h5">
     Create
     </Typography>
     </Button>
    </Box>
    </div>
    )
   }


export default CreateAppt;