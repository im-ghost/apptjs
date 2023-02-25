import {
  /*combineReducers,*/
  createAsyncThunk,
  createSlice
 } from '@reduxjs/toolkit'

import {
   getUsers,
   getUser,
   deleteUser,
   logUser,
   regUser,
   putUser
} from "./usersApi"
const initialState= {
  user:null,
  users:null,
  userById:null,
  loading: 'idle',
  error:null,
  isSuccessful :false
}/*
const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
      const response = await userAPI.fetchById(userId)
      return response.data
    }
  )*/
  

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {/*
     state,action)
    },*/
  },
  extraReducers: (builder) => {
    builder
    .addCase(logUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(logUser.fulfilled, (state, action) => {
        console.log(state.loading)
        const { payload } = action;
        state.isSuccessful = true

        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.user.user = payload
          alert("ttt"+state.user.user)
        }
      })
      .addCase(logUser.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(putUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(putUser.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.user = payload
        }
      })
      .addCase(putUser.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(getUsers.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.users = payload
        }
      })
      .addCase(getUsers.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(getUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(getUser.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.userById = payload
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(deleteUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.user = null
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        const { error } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.error = error
        }
      })
    .addCase(regUser.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(regUser.fulfilled, (state, action) => {
        const { payload } = action
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
        //  alert("slice")
          state.user = payload;
          state.isSuccessful=true
        }
      })
      .addCase(regUser.rejected, (state, action) => {
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
/*
export const {
     users,
      user,
      upUser,
      dUser,
      signup,
      signin
     } = userSlice.*/
export {
  getUsers,
   getUser,
   deleteUser,
   logUser,
   regUser,
   putUser
}
export default userSlice.reducer