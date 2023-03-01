import {
  useSelector,
  useDispatch
} from "react-redux";
import {
  Typography ,
  Box
} from "@mui/material";
import {
  useEffect,
  useState,
  useLayoutEffect
} from "react";
import {
  useNavigate,
  /*Link,
  BrowserRouter as Router*/
} from "react-router-dom"
import {
  getDoctors
} from "../features/users/usersSlice"
import Search from "../Components/Search"
import Doctors from "../Components/Doctors"
import Specialties from "../Components/Specialties"

const Home = () =>{
  const [name,setName] = useState("")
  const [greeting,setGreeting] = useState("")
  const [err,setError]= useState("")
  const [docs,setDocs] = useState([])
  const [specialties,setSpecialities] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user,doctors , error , isSuccessful } = useSelector((state)=>state.users)
  const great = (name) =>{
    const hours = new Date().getHours();
    if(hours > 0 && hours < 12){
      return `Good morning ${name}`
    }else if(hours>12 && hours < 18){
      return `Good afternoon ${name},hope you are having a great day?`
    }else{
      return `Good evening ${name},hope you had a great day?`
    }
  }
  useLayoutEffect(()=>{
  
    dispatch(getDoctors())
  },[dispatch])
  useEffect(()=>{
    if(user !== null){
      
      setName(user.name.split(" ")[1])
      setGreeting(great(name))
    }else{
     navigate("/authenticate")
    }
  },[user,name, navigate])
  useEffect(()=>{
    if(doctors.length > 0){
      setDocs(doctors)
      
      const specs = []
      for(var i=0;i<doctors.length;i++){
          
         
        for(var j=0;j<doctors[i].specialties.length;j++){
        
           let spec = doctors[i].specialties[j].split(",")
       for(var h= 0; h< spec.length;h++){
          if(!specs.includes(spec[h])){
            specs.push(spec[h])
          }
       }
        }
      }
      
      setSpecialities(specs)
      
      if(error){
        setError(error.message)
      }
    alert(specs)
    }
  },[error,isSuccessful, doctors, dispatch])
  return(
    <div>
    <Box className="">
     <Typography variant="body1">{greeting}</Typography>
     <Typography variant="h4"> Welcome back </Typography>{""}
    </Box>
    <Box className="">
      <Search />
    </Box>
    <Box className="">
      {docs.length > 0 ? <Doctors doctors={docs} /> : (<Typography variant="h5">No doctors available</Typography>)}
    </Box>
    <Box className="">
      {specialties.length > 0 ? <Specialties specialties={specialties} /> : (<Typography variant="h5">No Specialty available</Typography>)}
    </Box>
    <Box className="">{err}</Box>
    
    
    
    
    </div>
    )
}

export default Home