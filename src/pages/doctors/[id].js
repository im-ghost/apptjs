import {
  Typography
} from "@mui/material";
import {
  getDoctors
} from "../../features/users/usersSlice"
import {
  useNavigate,
  useParams
} from "react-router-dom"
import {
  useSelector,
  useDispatch
} from "react-redux"

import {
  useEffect
} from "react"
const Doctor = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [doc,setDoctor] = useState(null)
  const {
    user,
    doctors 
  } = useSelector((state)=>state.user)
  const {
    isSuccessful
  } = useSelector((state)=>state.appt)
  useLayoutEffect(()=>{
    dispatch(getDoctors())
  },[dispatch])
  useEffect(()=>{
    if(isSuccessful){
      const doctor = doctors.find(doc=>doc._id === id)
      if(doctor !== undefined) setDoctor(doctor)
      else navigate("/")
    } 
  },[isSuccessful, doctors])
  return(
    <div>
     <Typography variant="h3">{doc.name}</Typography>
     <button onClick={()=>navigate(`/create/${doc_id}`
    </div>
    )
}
export default Doctor