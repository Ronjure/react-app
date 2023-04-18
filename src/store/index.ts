import { configureStore } from "@reduxjs/toolkit";

import basicReducer from "./redux-basic";

export default configureStore({
  reducer: {
    basic: basicReducer,
  },
})
