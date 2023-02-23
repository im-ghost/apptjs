import {
  createAsyncThunk,
  createSlice,
  /*PayloadAction*/
 } from '@reduxjs/toolkit';
import {
  fetchAppointment,
  fetchUserAppointment,
  fetchDoctorAppointment,
  fetchAppointments
} from "./appointmentsApi"

export const fetchAppointmentAsync = createAsyncThunk(
  'appointment/fetchAppointment',
  async (id) => {
    const response = await fetchAppointment(id);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);
export const fetchAppointmentsAsync = createAsyncThunk(
  'appointment/fetchAppointments',
  async () => {
    const response = await fetchAppointments();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);
export const fetchDoctorAppointmentAsync = createAsyncThunk(
  'appointment/fetchDoctorAppointment',
  async (id) => {
    const response = await fetchDoctorAppointment(id);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);
export const fetchUserAppointmentAsync = createAsyncThunk(
  'appointment/fetchUserAppointment',
  async (id) => {
    const response = await fetchUserAppointment(id);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

const initialState = {
  value: {},
  status: 'idle'
}

export const appointmentSlice = createSlice({
  name: 'Appointment',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    /*builder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })*/
  },
})

/*export const {  } = appointmentSlice.actions*/

export const selectAppointment = (state) => state.appointment.value;

export default appointmentSlice.reducer