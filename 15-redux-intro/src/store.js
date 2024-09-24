import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import devToolsEnhancer from "remote-redux-devtools";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
  //with extra enhancers setting, Redux Devtools works on Safari but not on Chrome
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      devToolsEnhancer({
        realtime: true,
        name: "redux intro",
        hostname: "localhost",
        port: 8000,
      })
    ),
});

export default store;
