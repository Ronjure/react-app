import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'basic',
  initialState: {
    value: 0,
  },

  reducers: {
    increase: state => { state.value++ },

    decrease: state => { state.value-- },

    setNumber: (state, action: { payload: number,type: string }) => {
      state.value = action.payload
    }
  },
})

export const { increase, decrease, setNumber } = slice.actions

export default slice.reducer
