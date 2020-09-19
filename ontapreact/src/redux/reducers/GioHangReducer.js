// Khởi tạo giá trị ban đầu của store

const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Điện thoại Iphone",
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
    },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  return { ...state };
};
