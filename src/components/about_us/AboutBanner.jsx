import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";
import { Button } from "../../common/components/button/Button";
import { Play } from "../../common/components/Play";

export const AboutBanner = () => {
  return (
    <Box className={"about-banner"} h="600px">
      <Box
        className={"about-section--desktop"}
        bg={"rgba(229, 248, 253, 1)"}
        padding="112px 67px 122px 90px"
        position={"relative"}
      >
        <Box
          w="max-content"
          padding={"7px 15px"}
          bg={"rgba(236, 128, 160, 0.15)"}
          borderRadius={"5px"}
        >
          <Text
            content={"about us"}
            fontSize={"1.5rem"}
            fontWeight={"700"}
            lineHeight="22px"
            textTransform={"uppercase"}
            color="rgba(236, 128, 160, 1)"
          />
        </Box>
        <Text
          content="bring exciting moments
of fun while playing &
learning for children."
          textTransform={"capitalize"}
          fontWeight={"700"}
          lineHeight={"70px"}
          fontSize={"4.4rem"}
          textAlign={"left"}
          width="548px"
          height="210px"
          marginTop="20px"
          marginBottom="40px"
        />
        <Button
          content={"contact us"}
          p="17px 40px"
          borderRadius={"10px"}
          position="absolute"
          left={"90px"}
          bg="rgba(236, 128, 160, 1)"
        />
      </Box>
      <Box className={"about-section--mobile"} bg={"rgba(229, 248, 253, 1)"}>
        <Box
          w="max-content"
          bg={"rgba(236, 128, 160, 0.15)"}
          borderRadius={"5px"}
        >
          <Text
            content={"sprcial price"}
            textTransform={"uppercase"}
            fontWeight={"700"}
            lineHeight={"2.2rem"}
            padding={"7px 15px"}
            color="#EC80A0"
          />
        </Box>
        <Text
          content="bring exciting moments of fun while playing & learning for children."
          fontSize={"3rem"}
          lineHeight={"4rem"}
          textTransform={"capitalize"}
          fontWeight={"700"}
          marginTop={"15px"}
          marginBottom={"30px"}
        />
        <Button
          content={"contact us"}
          p={"13px 30px"}
          borderRadius={"10px"}
          bg={"rgba(231, 96, 136, 1)"}
        />
      </Box>
      <Box bg={"rgba(231, 96, 136, 1)"} position={"relative"}>
        <img src="/bird.png" alt="bird" className="about-banner__bird" />
        <Play />
      </Box>
    </Box>
  );
};
