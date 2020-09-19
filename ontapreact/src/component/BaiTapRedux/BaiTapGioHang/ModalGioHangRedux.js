import React, { Component } from "react";

// Kết nối component của react với store của redux
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.gioHang,
  };
};

export default connect(mapStateToProps(), null)(ModalGioHangRedux);
