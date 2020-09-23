import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";
export const rootReducer = combineReducers({
  // Nơi chứa các reducer nghiệp vụ
  GioHangReducer: GioHangReducer,
  QuanLySinhVienReducer: QuanLySinhVienReducer,
});
