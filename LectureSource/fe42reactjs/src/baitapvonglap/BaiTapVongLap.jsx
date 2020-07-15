import React, { Component } from "react";
export default class BaiTapVongLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { maSP: 1, tenSP: 'Iphone X', gia: 1000 },
                { maSP: 2, tenSP: 'Huawei Mate 20 Pro', gia: 2000 },
                { maSP: 3, tenSP: 'Samsung Galaxy Note 10', gia: 3000 }
            ]
        }
    }

    // Viet ham render tra ve 1 mang
    renderTable = () => {
        let contentTable = [];
        for (let i = 0; i < this.state.mangSanPham.length; i++) {
            let sp = this.state.mangSanPham[i];
            contentTable.push(
                <tr key={i}>
                    <td>{sp.maSP}</td>
                    <td>{sp.tenSP}</td>
                    <td>{sp.gia}</td>
                </tr>
            )
        }
        return contentTable;
    }

    renderTableUsingMap = () => {
        return this.state.mangSanPham.map((sp, index) => {
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td>{sp.tenSP}</td>
                    <td>{sp.gia}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            // <div className="container">
            //     <table className="table">
            //         <thead>
            //             <tr>
            //                 <th>Mã SP</th>
            //                 <th>Tên SP</th>
            //                 <th>Giá</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             {this.renderTableUsingMap()}
            //         </tbody>
            //     </table>
            // </div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.mangSanPham.map((sp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{sp.maSP}</td>
                                        <td>{sp.tenSP}</td>
                                        <td>{sp.gia}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}