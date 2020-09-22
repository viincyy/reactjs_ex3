import React, { Component } from "react";
// Kết nối component của react với store của redux
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} height={75} width={75} />
          </td>
          <td>{spGH.giaBan}</td>
          <td>{spGH.soLuong}</td>
          <td>{spGH.soLuong * spGH.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.xoaGioHang(index)}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Tên SP</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </div>
      </div>
    );
  }
}

// state của redux thành props của react, state: trạng thái của store tổng => truy xuất đến giỏ hàng reducer => biến state trên GioHangReducer
const mapStateToProps = (state) => {
  return {
    gioHang: state.GioHangReducer.gioHang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
