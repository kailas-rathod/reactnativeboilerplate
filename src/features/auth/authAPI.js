import {createAsyncThunk} from '@reduxjs/toolkit';

import API from '../../APIs';
import * as authAPI from './index';

export const LoginAPI = createAsyncThunk(
  'Auth/LoginAPI',
  async (payload, thunkAPI) => {
    try {
      const response = await API.authRepository.logIn(payload);
      console.tron.log('Login Data', response);
      if (response.data?.code == 200) {
        thunkAPI.dispatch(authAPI.token(response.data?.data.token));
        return response.data?.status;
      }
    } catch (error) {
      return null;
    }
  },
);
