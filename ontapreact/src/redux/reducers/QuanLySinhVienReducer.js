const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "Cybersoft",
      soDienThoai: "09862822180",
      email: "cybersoft@gmail.com",
    },
  ],
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      let mangSVUpdate = [...state.mangSinhVien, action.sinhVien];
      state.mangSinhVien = mangSVUpdate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
