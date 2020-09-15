import React from "react";
import "./App.css";
import SinhVien from "./component/databinding/SinhVien";
import Header from "./component/Header";
import Product from "./component/Product";
import Event from "./component/databinding/Event";
import DemoIf from "./component/CauTrucDieuKhien_Rerender/DemoIf";
import BaiTapState from "./component/CauTrucDieuKhien_Rerender/BaiTapState";
import BaiTapVongLap from "./component/VongLap/BaiTapVongLap";
import BaiTapVongLap2 from "./component/VongLap/BaiTapVongLap2";
import DemoProps from "./component/Props/DemoProps";

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
      <BaiTapVongLap /> */}
      <BaiTapVongLap2 />
      <DemoProps title={"Cybersoft"} />
    </div>
  );
}

export default App;
