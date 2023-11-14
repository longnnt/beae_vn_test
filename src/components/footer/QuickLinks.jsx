import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";

export const QuickLinks = () => {
  return (
    <Box marginRight={"236px"}>
      <Text
        content={"Quick Links"}
        fontSize={"2.4rem"}
        fontWeight={"700"}
        lineHeight={"3.1rem"}
        textTransform={"capitalize"}
        textAlign={"left"}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"start"}
        gap={"10px"}
        marginTop={"30px"}
      >
        <Text content={"My account"} />
        <Text content={"Cart"} />
        <Text content={"Wishlist"} />
        <Text content={"Product Compare"} />
      </Box>
    </Box>
  );
};
