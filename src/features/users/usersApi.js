import {
  createAsyncThunk
 } from '@reduxjs/toolkit'
import { api } from "../../app/hooks";
import axios from "axios"
//import { useSelector } from "react-redux"
const BASE_URL = "http://localhost:5000/api"

export const getUsers =createAsyncThunk(
    'users/getUsers',
    async (state, thunkAPI) => {
      try {
        const users = axios.get(`${BASE_URL}/users`);
        return users
      } catch (e) {
        throw new Error(e.error)
      }
    
})

export const logUser =createAsyncThunk(
    'users/logUser',
    async (payload, thunkAPI) =>{
      try {
        const user = await axios.post(`${BASE_URL}/users/user/login`,payload)
      } catch (e) {
    
        throw new Error(e.message)
      }
})

export const regUser =createAsyncThunk(
    'users/regUser',
    async (payload, thunkAPI) => {
        try {
        const user = await axios.post(`${BASE_URL}/users/`,payload)
        if(user){
          localStorage.setItem("appt-app-user",JSON.stringify(user))
          return user
        }
      } catch (e) {
    
        throw new Error(e.message)
      }
})

export const deleteUser =createAsyncThunk(
    'users/deleteUser',
    async (payload, thunkAPI) => {
       return "data"
  /*  const data = await delUser(payload)
        localStorage.removeItem("quiz-app-user")
        return data*/
})

export const putUser =createAsyncThunk(
    'users/putUser',
    async (payload, thunkAPI) => {
       return "data"
     /*   console.log(payload)
    const data = await updateUser(payload)
        localStorage.setItem("quiz-app-user",JSON.stringify(data))
        return data*/
})

export const getUser = createAsyncThunk(
    'users/getUser',
    async (payload, thunkAPI) => { 
      return "data"
    //return fetchUser(payload)
})

