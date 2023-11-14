import React from "react";
import "../index.css";

export const Box = ({
  display,
  children,
  justifyContent,
  alignItems,
  h,
  w,
  bg,
  padding,
  marginLeft,
  marginRight,
  position,
  boxShadow,
  gap,
  borderRadius,
  top,
  right,
  bottom,
  left,
  marginTop,
  marginBottom,
  transform,
  cursor,
  flex,
  flexDirection,
  overflow,
  borderLeft = "none",
  borderRight = "none",
  borderBottom,
  borderTop,
  border,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display,
        justifyContent,
        alignItems,
        height: h,
        width: w,
        backgroundColor: bg,
        padding,
        marginLeft,
        marginRight,
        position,
        boxShadow,
        gap,
        borderRadius,
        top,
        right,
        bottom,
        left,
        marginTop,
        marginBottom,
        transform,
        cursor,
        flex,
        flexDirection,
        overflow,
        borderLeft,
        borderRight,
        borderBottom,
        borderTop,
        border,
      }}
    >
      {children}
    </div>
  );
};
