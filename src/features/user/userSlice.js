import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
isLoading:false,
user:null,
};

const userSlice = {
    name:'user',
    initialState,
};

export default userSlice.reducer;