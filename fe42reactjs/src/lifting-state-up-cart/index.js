import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: []
    };
  }

  handleDetailProduct = product => {
    this.setState({
      detailProduct: product
    });
  };

  timViTri = id => {
    return this.state.listCart.findIndex(product => {
      return product.maSP === id;
    });
  };

  handleAddCart = product => {
    const objProduct = {
      maSP: product.maSP,
      tenSP: product.tenSP,
      hinhAnh: product.hinhAnh,
      donGia: product.giaBan,
      soLuong: 1
    };

    const index = this.timViTri(objProduct.maSP);
    let listCart = [...this.state.listCart];
    if (index !== -1) {
      //Cap nhat SL
      listCart[index].soLuong += 1;
    } else {
      //Them bao gio hang
      listCart = [...this.state.listCart, objProduct];
    }

    this.setState({
      listCart
    });
  };

  handleDelete = product => {
    const index = this.timViTri(product.maSP);
    if (index !== -1) {
      //Xoa SP trong listCart
      let listCart = [...this.state.listCart];
      listCart.splice(index, 1);
      this.setState({
        listCart: listCart
      });
    }
  };

  handleTangGiamSL = (status, product) => {
    const index = this.timViTri(product.maSP);
    let listCart = [...this.state.listCart];
    if (index !== -1) {
      if (status) {
        //Tang SL
        listCart[index].soLuong += 1;
      } else {
        //Giam SL
        if (listCart[index].soLuong > 1) {
          listCart[index].soLuong -= 1;
        }
      }
      this.setState({
        listCart
      });
    }
  };

  tongSL = () => {
    return this.state.listCart.reduce((tong, product) => {
      return (tong += product.soLuong);
    }, 0);
  };

  render() {
    const { listProduct, detailProduct, listCart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tongSL()})
          </button>
        </div>
        <DanhSachSanPham
          listProduct={listProduct}
          detailProduct={this.handleDetailProduct}
          addCart={this.handleAddCart}
        />
        <Modal
          listCart={listCart}
          delete={this.handleDelete}
          tangGiamSL={this.handleTangGiamSL}
        />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
