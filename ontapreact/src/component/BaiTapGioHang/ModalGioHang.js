import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    // Lấy dữ liệu gioHang tu BaiTapGioHang
    const { gioHang, xoaGioHang, tamGiangSoLuong } = this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{ maxWidth: "800px", width: "800px" }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Mã sản phẩm</td>
                      <td>Hình ảnh</td>
                      <td>Tên sản phẩm</td>
                      <td>Số lương</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((spGioHang, index) => {
                      return (
                        <tr key={index}>
                          <td>{spGioHang.maSP}</td>
                          <td>
                            <img
                              src={spGioHang.hinhAnh}
                              width={50}
                              height={75}
                            />
                          </td>
                          <td>{spGioHang.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                tamGiangSoLuong(spGioHang.maSP, true)
                              }
                            >
                              +
                            </button>
                            {spGioHang.soLuong}
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                tamGiangSoLuong(spGioHang.maSP, false)
                              }
                            >
                              -
                            </button>
                          </td>
                          <td>{spGioHang.giaBan.toLocaleString()}</td>
                          <td>
                            {(
                              spGioHang.soLuong * spGioHang.giaBan
                            ).toLocaleString()}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => xoaGioHang(spGioHang.maSP)}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>Tổng tiền</td>
                      <td>
                        {this.props.gioHang.reduce(
                          (tongTien, spGioHang, index) => {
                            return (tongTien +=
                              spGioHang.soLuong *
                              spGioHang.giaBan).toLocaleString();
                          },
                          0
                        )}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
