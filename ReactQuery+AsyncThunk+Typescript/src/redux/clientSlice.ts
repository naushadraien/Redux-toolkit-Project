import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface clientType {
  name: string;
  age: string;
  email: string;
  gender: string;
  id: string;
}
interface stateType {
  data: clientType[];
  isLoading: boolean;
  isError: boolean;
}
const initialState: stateType = {
  data: [],
  isLoading: false,
  isError: false,
};

export const getAllClients = createAsyncThunk(
  "getAllClients",
  async (data, { rejectWithValue }) => {
    const res = await fetch("https://64475d2650c253374423253d.mockapi.io/crud");
    try {
      return await res.json();
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);
const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllClients.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllClients.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getAllClients.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });
  },
});

export default clientSlice.reducer;
