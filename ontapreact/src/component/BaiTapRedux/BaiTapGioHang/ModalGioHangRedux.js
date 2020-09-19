import React, { Component } from "react";

// Kết nối component của react với store của redux
import { connect } from "react-redux";
export default class ModalGioHangRedux extends Component {
  render() {
    return <div></div>;
  }
}

// state của redux thành props của react, state: trạng thái của store tổng => truy xuất đến giỏ hàng reducer => biến state trên GioHangReducer
// const mapStateToProps = (state) => {
//   return {
//     gioHang: state.GioHangReducer.gioHang,
//   };
// };

// export default connect(mapStateToProps(), null)(ModalGioHangRedux);
