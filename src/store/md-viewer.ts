import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'mdViewer',
  initialState: {
    content: '',
  },

  reducers: {
    setViewerContent: (state, action: { payload: string,type: string }) => {
      state.content = action.payload
    }
  },
})

export const { setViewerContent } = slice.actions

export default slice.reducer
