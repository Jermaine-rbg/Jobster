import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
isLoading:false,
user:null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
  });

export const registerUser = createAsyncThunk('user/registerUser', async(user, thunkAPI) =>
{
   try {
    const resp = await customFetch.post('/auth/testingRegister', user)
   } catch (error){
    console.log(error.reponse);
   }
})

export const loginUser = createAsyncThunk('user/loginUser', async(user, thunkAPI) =>
{
    console.log(`Login User : ${user}`);
})



export default userSlice.reducer;