import {
  Paper,
  Typography,
  Button,
  Card
} from "@mui/material"

import {
  useState,
  useEffect
} from "react"
const Logout = () =>{
  const [logOut,setLogOut]= useState(true)
  useEffect(()=>{
    if(!logout){
      
    }
  },[logOut])
  const logout = () =>{
    alert("logout")
  }
  const cancel = () =>{
    setLogOut(false)
    alert("cancelled")
  }
  return(
    logOut && (<Paper raised={true}>
      <Typography variant="h3">
      Are you sure you want to sign out?
      </Typography>
      <div className="">
       <Button onClick={logout}>Yes</Button>
       <Button onClick={cancel}>No</Button>
      </div>
    </Paper>)
    )
}

export default Logout 