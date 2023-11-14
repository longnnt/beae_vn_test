import React from "react";
import { Box } from "../../common/components/Box";
import { Avatar } from "../../common/components/Avatar";
import { Text } from "../../common/components/Text";

export const OutTeamItem = ({ name, position, desc, url }) => {
  return (
    <Box
      borderRadius={"10px"}
      boxShadow={"0px 4px 30px 0px rgba(10, 30, 35, 0.10)"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={"35px 30px 30px 30px"}
    >
      <Avatar>
        <img src={url} alt="" />
      </Avatar>
      <Text
        content={"Name 01"}
        fontSize={"2.4rem"}
        fontWeight={"700"}
        lineHeight={"3.1rem"}
        marginTop={"30px"}
      />
      <Text
        content={"CEO & Founder"}
        fontWeight={"400"}
        lineHeight={"2.6rem"}
        opacity="0.5"
        marginTop="5px"
      />
      <Text
        content={
          "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit."
        }
        marginTop={"10px"}
        marginBottom={"15px"}
      />
      <img src="/social.png" alt="" />
    </Box>
  );
};
