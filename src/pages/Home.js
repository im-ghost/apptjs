import {
  useSelector,
  useDispatch
} from "react-redux";
import {
  Paper,
  Typography ,
  Box
} from "@mui/material";
import {
  useEffect,
  useState
} from "react";
import {
  useNavigator,
  Link,
  BrowserRouter as Router
} from "react-router-dom"

import Search from "../Components/Search"

const Home = () =>{
  const [name,setName] = useState(null)
  const [greeting,setGreeting] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigator();
  const { user } = useSelector((state)=>state.users)
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
  
  useEffect(()=>{
    if(user.name){
      setName(user.name.split()[1])
      setGreeting(great(name))
    }else if(!user){
      navigate("/authenticate")
    }
  },[user])
  return(
    <div>
    <Box className="">
     <Typography variant="body1">{greeting}</Typography>
     <Typography variant="h4"> Welcome back </Typography>{""}
    </Box>
    <Box className="">
      <Search />
    </Box>
    
    
    
    
    
    
    </div>
    )
}

export default Home