import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
export const rootReducer = combineReducers({
  // Nơi chứa các reducer nghiệp vụ
  GioHangReducer: GioHangReducer,
});
