import axios from "axios"
import {
  createAsyncThunk
 } from '@reduxjs/toolkit';
const BASE_URL = "http://localhost:5000/api/appointments";

const {  token } = JSON.parse(localStorage.getItem("appt-app-user"))
export const fetchAppointment = createAsyncThunk(
  'appointment/fetchAppointment',
  async (id) => {
    try {
        const appointment = await axios.get(`${BASE_URL}/appointment/${id}`,{
          headers:{
            authorization: token
          }
        });
        return appointment
      } catch (e) {
        throw new Error(e.error)
      }
  }
);
export const fetchAppointments = createAsyncThunk(
  'appointment/fetchAppointments',
  async () => {
     try {
        const appointments = await axios.get(`${BASE_URL}/`,{
          headers:{
            authorization: token
          }
        });
        return appointments
      } catch (e) {
        throw new Error(e.error)
      }
  }
);
export const fetchDoctorAppointments = createAsyncThunk(
  'appointment/fetchDoctorAppointments',
  async (id) => {
    try {
        const appointments = await axios.get(`${BASE_URL}/doctor/${id}`,{
          headers:{
            authorization: token
          }
        });
        return appointments
      } catch (e) {
        throw new Error(e.error)
      }
  }
);
export const fetchUserAppointments = createAsyncThunk(
  'appointment/fetchUserAppointments',
  async (id) => {
     try {
        const appointments = await axios.get(`${BASE_URL}/user/${id}`,{
          headers:{
            authorization: token
          }
        });
        return appointments
      } catch (e) {
        throw new Error(e.error)
      }
  }
);
export const doctorTimeSlots = createAsyncThunk(
  'appointment/doctorTimeSlots',
  async (id) => {
     try {
        const slots = await axios.get(`${BASE_URL}/slots/${id}`,{
          headers:{
            authorization: token
          }
        });
        return slots
      } catch (e) {
        throw new Error(e.error)
      }
  }
);
export const createAppointment = createAsyncThunk(
  'appointment/createAppointment',
  async (id,body) => {
     try {
        const appointment = await axios.post(`${BASE_URL}`,{
          headers:{
            authorization: token
          },
          body: body 
        });
        return appointment
      } catch (e) {
        throw new Error(e.error)
      }
  }
);
export const cancelAppointment = createAsyncThunk(
  'appointment/cancelAppointment',
  async (id) => {
     try {
        await axios.delete(`${BASE_URL}/appointment/${id}`,{
          headers:{
            authorization: token
          }
        });
        return "Done"
      } catch (e) {
        throw new Error(e.error)
      }
  }
);