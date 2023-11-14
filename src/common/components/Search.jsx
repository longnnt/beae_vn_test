import React from "react";
import { Box } from "./Box";
import { Text } from "./Text";

export const Search = ({ count, bg }) => {
  return (
    <Box position={"relative"}>
      <img src="/cart.png" width={"25px"} height={"25px"} alt="cart" />
      <Box
        display={count === null ? "none" : "flex"}
        w="6px"
        h="14px"
        bg={bg}
        padding="3px 7px"
        alignItems={"center"}
        borderRadius="10px"
        border="1px solid #ffffff"
        position={"absolute"}
        right="0"
        bottom="0"
      >
        <Text
          color="#FFFFFF"
          content={count}
          fontSize={"1rem"}
          lineHeight="14px"
        />
      </Box>
    </Box>
  );
};
