import {
  createSlice,
 } from '@reduxjs/toolkit';
import {
  doctorTimeSlots,
  fetchUserAppointments,
  fetchDoctorAppointments,
  fetchAppointments,
  fetchAppointment,
  createAppointment,
  cancelAppointment
} from "./apptApi"


const initialState = {
  loading: 'idle',
  appointments: [],
  appointment: null,
  timeSlots : [],
  userAppointments:[],
  doctorsAppointments :[],
  isSuccessful:false,
}

export const apptSlice = createSlice({
  name: 'Appt',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAppointment.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
     .addCase(fetchAppointment.fulfilled, (state, action) => {
        const { payload } = action;
        state.isSuccessful = true
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.appointment = payload
          
        }
      })
     .addCase(fetchAppointment.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(doctorTimeSlots.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
     .addCase(doctorTimeSlots.fulfilled, (state, action) => {
        const { payload } = action;
        state.isSuccessful = true
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.timeSlots = payload
          
        }
      })
     .addCase(doctorTimeSlots.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(fetchDoctorAppointments.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
     .addCase(fetchDoctorAppointments.fulfilled, (state, action) => {
        const { payload } = action;
        state.isSuccessful = true
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.doctorAppointments = payload
          
        }
      })
     .addCase(fetchDoctorAppointments.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(fetchAppointments.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
     .addCase(fetchAppointments.fulfilled, (state, action) => {
        const { payload } = action;
        state.isSuccessful = true
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.appointments = payload
          
        }
      })
     .addCase(fetchAppointments.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(createAppointment.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
     .addCase(createAppointment.fulfilled, (state, action) => {
        const { payload } = action;
        state.isSuccessful = true
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.appointment = payload
          
        }
      })
     .addCase(createAppointment.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(cancelAppointment.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
     .addCase(cancelAppointment.fulfilled, (state, action) => {
       // const { payload } = action;
        state.isSuccessful = true
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
         // state.userAppointments = payload
          
        }
      })
     .addCase(cancelAppointment.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(fetchUserAppointments.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
     .addCase(fetchUserAppointments.fulfilled, (state, action) => {
        const { payload } = action;
        state.isSuccessful = true
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.userAppointments = payload
          
        }
      })
     .addCase(fetchUserAppointments.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
  },
})



export default apptSlice.reducer