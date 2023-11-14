import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";
import { IconText } from "./IconText";

export const ContactInfo = () => {
  return (
    <Box marginRight={"147px"}>
      <Text
        content="contact info"
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
        <IconText
          content={"560 King St W, Kingston, ON K7L 4V7, Canada"}
          w={"200px"}
        >
          <img src={"/location.png"} alt="" />
        </IconText>
        <IconText content={"contactinfo@gmail.com"}>
          <img src={"/email.png"} alt="" />
        </IconText>
        <IconText content={"+1 212 736 3100"}>
          <img src={"/headphone.png"} alt="" />
        </IconText>
      </Box>
    </Box>
  );
};
