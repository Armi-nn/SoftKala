import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./Slice/CartSlice";
import AuthSliceReducer from "./Slice/AuthSlice";
import LikeSliceReducer from "./Slice/LikeSlice";
const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
    auth: AuthSliceReducer,
    like: LikeSliceReducer,
  },
});
export default store;
