import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";

export const ProudOfItem = ({ number, title, desc }) => {
  return (
    <Box
      padding={"40px 30px"}
      boxShadow={"0px 4px 30px 0px rgba(10, 30, 35, 0.10)"}
    >
      <Text
        content={number}
        lineHeight={"55px"}
        fontWeight={"700"}
        fontSize={"4.2rem"}
        color="rgba(236, 128, 160, 1)"
      />
      <Text
        content={title}
        marginTop={"20px"}
        marginBottom={"10px"}
        fontSize={"2.4rem"}
        fontWeight={"700"}
        lineHeight={"31px"}
        color="rgba(26, 17, 20, 1)"
      />
      <Text
        content={desc}
        lineHeight={"26px"}
        fontWeight={"400"}
        color="rgba(10, 30, 35, 1)"
      />
    </Box>
  );
};
