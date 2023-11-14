import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";

export const IconText = ({ children, content, w }) => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      {children}{" "}
      <Text
        content={content}
        marginLeft={"25px"}
        width={w}
        textAlign={"left"}
      />
    </Box>
  );
};
