import React from "react";
import { Text } from "../../common/components/Text";
import { AboutBanner } from "./AboutBanner";
import { Box } from "../../common/components/Box";
import { Divider } from "../../common/components/Divider";

export const AboutUs = () => {
  return (
    <Box className={"about-us"}>
      <Text
        className="about-us__title"
        content={"About Us"}
        fontWeight={"700"}
      />
      <Box className={"about-us__text"} display={"flex"}>
        <Text content={"Home"} textAlign={"left"} marginRight={"15px"} />
        <Divider />
        <Text
          content={"About"}
          marginLeft={"15px"}
          color="rgba(26, 17, 20, 0.20)"
        />
      </Box>
      <AboutBanner />
    </Box>
  );
};
