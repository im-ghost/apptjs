
import React,{
  useEffect,
  useReducer,
  useState,
  
} from "react"
import  {
  useNavigate
} from "react-router-dom"

import { regUser } from "../../features/users/usersSlice"

import { 
  useDispatch,
  useSelector
 } from "react-redux"
import {
  Typography,
  Card,
  Select,
  TextField,
  MenuItem,
  Box,
  Button
  
} from "@mui/material"
const Signup =({})=>{
 
 const [err,setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const initialState={
    name:"",
    email:"",
    password:"",
    password2:"",
    isDoctor:false,
    specialties:[]
  }
  

  const { user, loading, error, isSuccess,  } = useSelector(
    (state) => state.users
  )
// alert("38")
  useEffect(() => {
    if (error) {

      setError(error.message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    //dispatch(reset())
  }, [error, isSuccess,user])
  // alert("50")
  const create = async (e)=>{
    e.preventDefault();
   const data = {
     name:state.name,
     email:state.email,
     password:state.password,
     isDoctor:state.isDoctor,
     specialties:state.specialties
   }
   await dispatch(regUser(data))
  
   
  } 
  const reducer = (state,action) =>{
    switch (action.type) {
      case 'setName':
        return {
          ...state,
          name:action.payload
        }
        break;
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
      case 'setPassword2':
        return {
          ...state,
          password2:action.payload
        }
        break;
      case 'setDoctor':
        return {
          ...state,
          isDoctor:action.payload
        }
        break;
      case 'setSpecialties':
        return {
          ...state,
          specialties:[action.payload]
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

  //if (loading) return <Loader />;
 
  

  return(
    <div className="bg-blue-900 text-center flex flex-col justify-center  h-screen w-screen rounded-2xl border-none shadow-3xl">
    <Typography variant='h2'>
    Welcome esteemed guest
    </Typography>
   
    <Typography variant='h3'>
    let's sign you up
    </Typography>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80vw' },
      }}
      className="sign__form"
      noValidate
      autoComplete="on"
    >
    <TextField
    id="name"
    label="Name"
    placeholder="Full Name"
    className="signin__form--input" 
     InputProps={{
     value:state.name,
     onChange:(e)=>{
       setState({
       type:"setName",
       payload:e.target.value
       })
     },
    
     
     }}
     />
    
    <TextField
    id="email"
    label="Email "
    placeholder="Email address"
    className="signin__form--input" 
     InputProps={{
     value:state.email,
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
    className="signin__form--input" 
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
    
    <TextField
    id="password2"
    label="Confirm Password"
    placeholder="Confirm password"
    className="signin__form--input" 
     InputProps={{
     value:state.password2,
     type:"password",
     onChange:(e)=>{
       setState({
       type:"setPassword2",
       payload:e.target.value
       })
     },
    
     }}
     />
    <TextField
    id="isDoctor"
    label="Are you a doctor?"
    placeholder="Are you a doctor?"
    className="signin__form--input" 
     InputProps={{
     value:state.isDoctor,
     type:"checkbox",
     onChange:(e)=>{
       setState({
       type:"setDoctor",
       payload:e.target.value
       })
     },
    
     }}
     />
    <TextField
    id="specialties"
    label="specialties"
    placeholder="What are your specialties"
    className="signin__form--input" 
     InputProps={{
     value:state.specialties,
     type:"text",
     onChange:(e)=>{
       setState({
       type:"setSpecialties",
       payload:e.target.value
       })
     },
    
     }}
     />
    
     <Button type='submit' onClick={create} className="sign__button">
     <Typography variant="h5">
     Create
     </Typography>
     </Button>
    </Box>
    </div>
    )
   }


export default Signup;







