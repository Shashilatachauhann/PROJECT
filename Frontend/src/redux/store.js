import {configureStore } from "@reduxjs/toolkit";
import {authSliceReducer} from "./authSlice";


const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  }
//  persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
});

export default store;