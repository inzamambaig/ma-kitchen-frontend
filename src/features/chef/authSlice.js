import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// token
const chef = JSON.parse(localStorage.getItem("chef"));

const initialState = {
  chef: chef ? chef : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register

export const createChef = createAsyncThunk(
  "auth/createChef",
  async (chef, thunkAPI) => {
    try {
      return await authService.create(chef);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginChef = createAsyncThunk(
  "auth/loginChef",
  async (chef, thunkAPI) => {
    try {
      return await authService.login(chef);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createChef.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createChef.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chef = action.payload;
      })
      .addCase(createChef.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.chef = null;
      })
      .addCase(loginChef.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginChef.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chef = action.payload;
      })
      .addCase(loginChef.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.chef = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.chef = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
