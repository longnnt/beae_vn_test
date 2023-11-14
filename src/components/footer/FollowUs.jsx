import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";
import { IconText } from "./IconText";

export const FollowUs = () => {
  return (
    <Box>
      <Text
        content={"Follow Us"}
        fontSize={"2.4rem"}
        fontWeight={"700"}
        lineHeight={"3.1rem"}
        textTransform={"capitalize"}
        textAlign={"left"}
      />
      <Box display={"flex"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          alignItems={"start"}
          marginTop={"30px"}
        >
          <IconText content={"Facebook"}>
            <img src="/facebook.png" alt="" width="20px" />
          </IconText>
          <IconText content={"Twitter"}>
            <img src="/twitter.png" alt="" width="20px" />
          </IconText>
          <IconText content={"Instagram"}>
            <img src="/instagram.png" alt="" width="20px" />
          </IconText>
          <IconText content={"Youtube"}>
            <img src="/youtube.png" alt="" width="20px" />
          </IconText>
        </Box>
      </Box>
    </Box>
  );
};
