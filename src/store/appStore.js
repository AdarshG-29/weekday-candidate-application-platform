import { configureStore } from "@reduxjs/toolkit";
import reducer from "../redux/combineReducer";

const appStore = configureStore({ reducer });

export default appStore;
