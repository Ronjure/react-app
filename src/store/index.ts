import { configureStore } from "@reduxjs/toolkit";

import basicReducer from "./redux-basic";
import mdEditorReducer from "./md-editor";
import mdViewerReducer from "./md-viewer";

export default configureStore({
  reducer: {
    basic: basicReducer,

    mdEditor: mdEditorReducer,
    mdViewer: mdViewerReducer,
  },
})
