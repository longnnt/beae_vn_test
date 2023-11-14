import React from "react";
import { Text } from "../Text";

export const Button = ({
  content,
  w,
  p,
  h,
  margin,
  borderRadius,
  position,
  left,
  bg,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textTransform,
  className,
}) => {
  return (
    <button
      className={className}
      style={{
        width: w,
        padding: p,
        height: h,
        margin,
        border: "none",
        borderRadius,
        position,
        left,
        backgroundColor: bg,
        cursor: "pointer",
      }}
    >
      <Text
        content={content}
        textTransform={"uppercase"}
        lineHeight={lineHeight || "26px"}
        fontSize={fontSize || "2rem"}
        fontWeight={fontWeight || "700"}
        letterSpacing={letterSpacing || "2px"}
        color="rgba(255, 255, 255, 1)"
      />
    </button>
  );
};
