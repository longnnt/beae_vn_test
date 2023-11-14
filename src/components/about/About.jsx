import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";
import { Button } from "../../common/components/button/Button";

export const About = () => {
  return (
    <Box className={"about"}>
      <img src="/about_0.png" alt="" className="about-img__first" />
      <img
        className="about-img__second"
        src="/about_1.png"
        alt=""
        style={{ borderRadius: "20px" }}
      />

      <Box
        className={"about__text"}
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        bg={"rgba(253, 244, 247, 1)"}
        borderRadius={"20px"}
      >
        <Text className={"about__title"} content={"Big love for"} />
        <Text
          className={"about__title"}
          content={"our lovely kids."}
          width={"max-content"}
        />
        <Text
          className={"about__desc"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud exercitation."
          }
        />
        <Button
          content={"contact us"}
          fontSize={"1.7rem"}
          letterSpacing={"1.7px"}
          fontWeight={"700"}
          lineHeight={"22px"}
          p="14px 30px"
          borderRadius={"10px"}
          bg={"rgba(231, 96, 136, 1)"}
        />
      </Box>
    </Box>
  );
};
