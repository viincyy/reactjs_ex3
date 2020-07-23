import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      },
      errors: {
        id: "",
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        type: "",
      },
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    /*
    * Chạy khi props từ component Cha truyền vào thay đổi
    * UNSAFE_componentWillReceiveProps chỉ chạy khi được viết tại component Con
    */
    if (nextProps && nextProps.userEdit) {
      this.setState({
        values: {
          ...this.setState.values,
          id: nextProps.userEdit.id,
          username: nextProps.userEdit.username,
          name: nextProps.userEdit.name,
          email: nextProps.userEdit.email,
          phoneNumber: nextProps.userEdit.phoneNumber,
          type: nextProps.userEdit.type,
        }
      })
    } else {
      this.setState({
        values: {
          id: "",
          username: "",
          name: "",
          email: "",
          phoneNumber: "",
          type: "USER",
        },
      })
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    // C1
    // const state = this.state;
    // this.setState({
    //   values: {
    //     ...state.values,
    //     [name]: value,
    //   },
    // });

    // C2
    this.setState((state) => {
      return {
        values: {
          ...state.values,
          [name]: value,
        },
      };
    });
  };

  handleBlur = (event) => {
    const { value, name } = event.target;

    const errorMessage = this.validate(name, value);

    // if (errorMessage) {
    this.setState((state) => {
      return {
        errors: {
          ...state.errors,
          [name]: errorMessage,
        },
      };
    });

    // if (name === "username") {
    //   if (!value) {
    //     this.setState((state) => {
    //       return {
    //         errors: {
    //           ...state.errors,
    //           [name]: "Username không được để trống",
    //         },
    //       };
    //     });
    //   }
    // }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    for (let key in this.state.values) {
      const errorMessage = this.validate(key, this.state.values[key]);
      if (errorMessage) {
        isValid = false;
      }
      this.setState((state) => {
        return {
          errors: {
            ...state.errors,
            [key]: errorMessage,
          },
        };
      });
    }

    if (!isValid) return;

    // Thêm user
    // Truyền value(thông tin user ra ngoài index để thêm)
    this.props.onSave(this.state.values);
  };

  validate = (name, value) => {
    let errorMessage = "";

    if (name === "username") {
      errorMessage = !value ? "Username không được để trống" : "";
    }
    if (name === "name") {
      errorMessage = !value ? "Name không được để trống" : "";
    }
    if (name === "email") {
      if (!value) {
        errorMessage = "Email không được để trống";
      } else {
        const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
        errorMessage = !isValid ? "Email không hợp lệ" : "";
      }
    }
    if (name === "phoneNumber") {
      errorMessage = !value ? "phoneNumber không được để trống" : "";
    }

    return errorMessage;
  };

  render() {
    console.log(this.state);
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
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
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={this.state.values.username}
                    // onChange={(event) =>
                    //   this.setState({ username: event.target.value })
                    // }
                    onChange={(event) => this.handleChange(event)}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.username && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.username}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={this.state.values.name}
                    // onChange={(event) =>
                    //   this.setState({ name: event.target.value })
                    // }
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.name && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.name}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.email && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.email}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>phoneNumber Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    value={this.state.values.phoneNumber}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {this.state.errors.phoneNumber && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.phoneNumber}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    className="form-control"
                    name="type"
                    value={this.state.values.type}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  >
                    {/* <option value="">Vui long chon</option> */}
                    <option value="USER">USER</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
