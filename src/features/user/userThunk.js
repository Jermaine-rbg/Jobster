
import customFetch from "../../utils/axios";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "./job/jobSlice";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async(url,user,thunkAPI) =>{
    try {
        const resp = await customFetch.post(url, user)
        return resp.data;
       } catch (error){
        return thunkAPI.rejectWithValue(error.response.data.msg);
       }
};

export const loginUserThunk = async(url, user, thunkAPI) =>{
    try {
        const resp = await customFetch.post(url, user)
        return resp.data;
       } catch (error){
       
        return thunkAPI.rejectWithValue(error.response.data.msg);
       }

};

export const updateUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.patch(url, user, {
          headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            // authorization: `Bearer `,
          },
        });
  
        return resp.data;
      } catch (error) {
        if(error.response.status === 401){
          thunkAPI.dispatch(logoutUser())
          return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
       }
        return thunkAPI.rejectWithValue(error.response.data.msg);
      }
};

export const clearStoreThunk = async (message, thunkAPI)=>{
  try {
    thunkAPI.dispatch(logoutUser(message))
    thunkAPI.dispatch(clearAllJobsState())
    thunkAPI.dispatch(clearValues())
    Promise.resolve()
  } catch (error) {
    Promise.reject();
  }
}








