import React from "react";
import "../index.css";

export const Divider = ({ position, top, right, left, bottom }) => {
  return (
    <div
      className="divider"
      style={{ position, top, left, right, bottom }}
    ></div>
  );
};
