import React,{
  useEffect,
  useReducer,
  useState,
} from "react"
import { 
  useDispatch,
  useSelector
 } from "react-redux"
import  {
  useNavigate
} from "react-router-dom"
import {
  Typography,
  TextField,
  Box,
  Button
} from "@mui/material";
import { logUser } from "../../features/users/usersSlice"
//import Loader from "../../components/Loader"


const Signin =()=>{
  const [err,setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //alert("30")
  const initialState={
    email:"",
    password:""
  }
  const { user, error, isSuccess,  } = useSelector(
    (state) => state.users
  )
// alert("38")
  useEffect(() => {
    if (error) {
    //  alert(Object.values(error))
      //alert(error.message)
      setError(error.message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    //dispatch(reset())
  }, [navigate,error, isSuccess,user,dispatch])
  const login = async (e)=>{
    e.preventDefault();
   const data = {
     email:state.email,
     password:state.password
   }
   await dispatch(logUser(data))
   
   
  } 
  //alert("67")
  const reducer = (state,action) =>{
    switch (action.type) {
      case 'setEmail':
        return {
          ...state,
          email:action.payload
        }
        break;
      case 'setPassword':
        return {
          ...state,
          password:action.payload
        }
        break;
      case 'reset':
        return {
         state:initialState
        }
        break;
      
      default:
        return state
    }
  }
  const [state,setState] = useReducer(reducer,initialState)

  return(
    <div className="bg-blue-900 text-center flex flex-col justify-center  h-screen w-screen rounded-2xl border-none shadow-3xl">
    <Box className="text-ryan-900">
    <Typography variant="h2">
    Let's sign you in
    </Typography>
    <Typography variant="h3">
    Welcome back,we have missed you
    </Typography>
    <Typography variant="h6" className="bg-red-900 italics">
    {err}
    </Typography>
    </Box>
   <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80vw', border:'none'},
      }}
      className="shdow-2xl"
      noValidate
      autoComplete="off"
    >
    <TextField
    id="email"
    label="Email "
    placeholder="Email address"
    className="bg-blue-100 border-none rounded-2xl" 
     InputProps={{
     value:state.email,
     type:"email",
     onChange:(e)=>{
       setState({
       type:"setEmail",
       payload:e.target.value
       })
     },
     }}
     />
    
    <TextField
    id="password"
    label="Password"
    placeholder="Password"
    className="bg-blue-100 rounded-2xl" 
     InputProps={{
     value:state.password,
     type:"password",
     onChange:(e)=>{
       setState({
       type:"setPassword",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
     />
    <Button type='submit' onClick={login} className="bg-blue-100 rounded-2xl" variant="contained">
     <Typography variant="h4">
     Sign In
     </Typography>
     </Button>
    </Box>
    </div>
    )
   }


export default Signin;







