import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import TableSinhVien from "./TableSinhVien";

export default class BaiTapForm extends Component {
  render() {
    return (
      <div className="contaienr">
        <h3 className="text-center text-primary">Bài tập Form</h3>
        <FormSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}
