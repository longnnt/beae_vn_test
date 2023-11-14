import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";

export const BenefitItem = ({ url, title, desc }) => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <img src={url} alt="" />
      <Box marginLeft={"20px"}>
        <Text
          content={title}
          textAlign={"left"}
          fontSize={"2.4rem"}
          fontWeight={"700"}
          lineHeight={"3.1rem"}
          marginBottom={"10px"}
        />
        <Text
          content={desc}
          lineHeight={"2.6rem"}
          color="rgba(88, 93, 103, 1)"
        />
      </Box>
    </Box>
  );
};
