import React from "react";
import "../index.css";

export const Text = ({
  content,
  color = "#1A1114",
  marginLeft,
  marginRight,
  fontWeight,
  fontSize,
  textAlign,
  lineHeight,
  textTransform,
  padding,
  height,
  width,
  marginBottom,
  marginTop,
  letterSpacing,
  opacity,
  borderTop,
  className,
}) => {
  return (
    <p
      className={`text ${className}`}
      style={{
        color,
        marginLeft,
        marginRight,
        fontWeight,
        fontSize,
        textAlign,
        lineHeight,
        textTransform,
        padding,
        width,
        height,
        marginBottom,
        marginTop,
        letterSpacing,
        opacity,
        borderTop,
      }}
    >
      {content}
    </p>
  );
};
