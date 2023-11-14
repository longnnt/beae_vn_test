import React from "react";
import { TextWithIcon } from "../../common/components/TextWithIcon";
import { Text } from "../../common/components/Text";
import { Box } from "../../common/components/Box";
import { DownArrow } from "../../common/components/DownArrow";
import { Divider } from "../../common/components/Divider";
import "../index.css";

export const TopHeader = () => {
  return (
    <Box className="top-header" bg="rgba(236, 128, 160, 1)" padding="7px 255px">
      <Text content={"KITO- Every day low price"} />
      <Text
        content={"Free Delivery on orders over £120. Don’t miss discount."}
        color={"#C81B10"}
      />
      <Box display={"flex"} position="relative">
        <TextWithIcon content={"ENG"} marginRight="31px" marginText="5px">
          <DownArrow />
        </TextWithIcon>
        <Divider position={"absolute"} right={"50%"} />
        <TextWithIcon content={"USD"} marginText="5px">
          <DownArrow />
        </TextWithIcon>
      </Box>
    </Box>
  );
};
