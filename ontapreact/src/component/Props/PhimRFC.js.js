import React from "react";

export default function PhimRFC({ phim_input, ...restParam }) {
  return (
    <div className="card text-white bg-secondary">
      <img
        className="card-img-top"
        src={phim_input.hinhAnh}
        alt={phim_input.biDanh}
        width={200}
        height={350}
      />
      <div className="card-body">
        <h4 className="card-title">{phim_input.tenPhim}</h4>
        <p className="card-text">
          {phim_input.moTa.length > 100
            ? phim_input.moTa.substr(0, 100) + "..."
            : phim_input.moTa}
        </p>
      </div>
    </div>
  );
}
