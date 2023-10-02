// import {createAsyncThunk} from '@reduxjs/toolkit';

// import API from '../../APIs';
// import * as authAPI from './index';

// export const LoginAPI = createAsyncThunk(
//   'Auth/LoginAPI',
//   async (payload, thunkAPI) => {
//     try {
//       const response = await API.authRepository.logIn(payload);
//       console.tron.log('Login Data', response);
//       if (response.data?.code == 200) {
//         thunkAPI.dispatch(authAPI.token(response.data?.data.token));
//         return response.data?.status;
//       }
//     } catch (error) {
//       return null;
//     }
//   },
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../APIs';
import { token } from './index'; // Assuming `token` is an action creator from the './index' file

export const loginAPI = createAsyncThunk('Auth/LoginAPI', async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await API.authRepository.logIn(payload);
    console.tron.log('Login Data', response);

    if (response.data?.code === 200) {
      dispatch(token(response.data?.data.token));
      return response.data?.status;
    } else {
      // Handle non-200 status codes as needed
      return rejectWithValue(response.data?.message);
    }
  } catch (error) {
    // Handle API call errors
    return rejectWithValue('Login failed. Please try again later.');
  }
});
