import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ]
    };
  }
  userList = (userList) => {
    this.setState({
      userList
    })
  }
  timViTri = (id) => {
    return this.state.userList.findIndex(user => {
      return id === user.id;
    });
  }
  handleDeleteUser = (id) => {
    const index = this.timViTri(id);
    if(index !== -1){
      let userList = [...this.state.userList];
      userList.splice(index, 1);
      this.setState({
        userList
      }) 
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users userList = {this.state.userList} deleteUser = {this.handleDeleteUser}/>
        <Modal />
      </div>
    );
  }
}

export default Home;
