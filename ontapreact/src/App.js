import React from "react";
import "./App.css";
import SinhVien from "./component/databinding/SinhVien";
import Header from "./component/Header";
import Product from "./component/Product";
import Event from "./component/databinding/Event";
import DemoIf from "./component/CauTrucDieuKhien/DemoIf";
import BaiTapState from "./component/CauTrucDieuKhien/BaiTapState";
import BaiTapVongLap from "./component/VongLap/BaiTapVongLap";
import BaiTapVongLap2 from "./component/VongLap/BaiTapVongLap2";
import DemoProps from "./component/Props/DemoProps";
import BaiTapTruyenFunction from "./component/Props/BaiTapTruyenFunction/BaiTapTruyenFunction";
import BaiTapComponent from "./component/BaiTap/BaiTapComponent";
import BaiTapGioHang from "./component/BaiTapGioHang/BaiTapGioHang";
import BTGioHangRedux from "./component/BaiTapRedux/BaiTapGioHang/BTGioHangRedux";

function App() {
  return (
    <div className="app">
      {/* <Header />
      <div className="container">
        <Product />
      </div>
      <SinhVien />
      <Event />
      <DemoIf />
      <BaiTapState />
      <BaiTapVongLap /> 
      /* <BaiTapVongLap2 />
      <DemoProps title={"Cybersoft"} /> 
       
      <BaiTapComponent /> 
      <BaiTapTruyenFunction /> 
    
      <BaiTapGioHang />*/}
      <BTGioHangRedux />
    </div>
  );
}

export default App;
