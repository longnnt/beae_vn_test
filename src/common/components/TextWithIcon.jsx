import React from "react";
import { Text } from "./Text";
import { Box } from "./Box";

export const TextWithIcon = ({
  content,
  wrapperStyle,
  isLeft,
  children,
  isRight,
  marginLeft,
  marginRight,
  marginText,
  fontWeight,
}) => {
  return (
    <Box display={"flex"} alignItems={"center"} marginRight={marginRight}>
      <Text
        content={content}
        marginRight={marginText}
        fontWeight={fontWeight}
      />
      {children}
    </Box>
  );
};
