import React, { Component } from "react";
import { connect } from "react-redux";
class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="card text-white bg-primary">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt
          width={150}
          height={250}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaSP}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

// Đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    // Tao ra props component (là function) đưa dữ liệu lên store
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        giaBan: sanPham.giaBan,
        soLuong: 1,
        hinhAnh: sanPham.hinhAnh,
      };
      // Tạo action đưa dữ liệu lên reducer
      const action = {
        type: "THEM_GIO_HANG",
        spGioHang: spGioHang, //Nội dung gửi lên reducer
      };
      console.log(action);
      // Dùng dispatch để đưa dữ liệu lên reducer
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
