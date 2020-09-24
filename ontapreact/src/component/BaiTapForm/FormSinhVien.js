import React, { Component } from "react";
import { connect } from "react-redux";
class FormSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    valid: "false",
  };

  onChange = (e) => {
    // Lấy giá trị mỗi lần value input thay đổi
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;

    let errMessage = "";

    if (value.trim() === "") {
      // Kiểm tra bất kì control input người dùng nhâp vào
      errMessage = name + " không đươc bỏ trống !";
    }

    // Kiểm tra email
    if (type === "email") {
      // const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errMessage = name + " không đúng định dạng !";
      }
    }
    if (type === "number") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errMessage = name + " không đúng định dạng !";
      }
    }
    let valueUpdate = { ...this.state.values, [name]: value }; // Cap nhat gia tri cho state
    let errorUpdate = { ...this.state.errors, [name]: errMessage }; // Cap nhat loi cho state

    this.setState(
      {
        ...this.state,
        values: valueUpdate,
        errors: errorUpdate,
      },
      () => {
        console.log(this.state);
        this.checkValid();
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); // cản sự kiên submit reload trang của browser.
    this.props.themSinhVien(this.state.values);
  };

  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }
    this.setState({
      ...this.state,
      valid: valid,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            Thông tin sinh viên
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.onChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-md-6">
                  <span>Họ tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.onChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <span>Email</span>
                  <input
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.onChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group col-md-6">
                  <span>Số điên thoại</span>
                  <input
                    type="number"
                    pattern="^\d+$"
                    className="form-control"
                    name="soDienThoai"
                    value={this.state.values.soDienThoai}
                    onChange={this.onChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-right">
                  {this.state.valid == true ? (
                    <button className="btn btn-success">Thêm sinh viên</button>
                  ) : (
                    <button type="submit" className="btn btn-success" disabled>
                      Thêm sinh viên
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
