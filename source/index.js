import actions from "./actions";
import rootReducer from "./reducers";
/*
  !README
  
  In older version of redux 
  ACTIONS & REDUCERS will be return in different file 
  But in redux-toolkit creatSlice will hold ACTIONS & REDUCERS as single slice 
*/

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
});

export { actions, store };
