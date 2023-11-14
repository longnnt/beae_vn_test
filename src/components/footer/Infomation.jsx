import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";

export const Infomation = () => {
  return (
    <Box marginRight={"234px"}>
      <Text
        content={"Infomation"}
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
        <Text content={"Privacy policy"} />
        <Text content={"Refund policy"} />
        <Text content={"Shipping & Return"} />
        <Text content={"Term & conditions"} />
      </Box>
    </Box>
  );
};
