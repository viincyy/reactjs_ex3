// Khởi tạo giá trị ban đầu của store

const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Điện thoại Iphone",
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
      hinhAnh: "./img/sp_iphoneX.png",
    },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // Xử lý logic
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat(index).soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  return { ...state };
};
