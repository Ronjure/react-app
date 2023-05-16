import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'mdEditor',
  initialState: {
    content: '',
  },

  reducers: {
    setEditorContent: (state, action: { payload: string,type: string }) => {
      state.content = action.payload
    }
  },
})

export const { setEditorContent } = slice.actions

export default slice.reducer
