import React from "react";
import { Box } from "../../common/components/Box";
import { ContactInfo } from "../../components/footer/ContactInfo";
import { QuickLinks } from "../../components/footer/QuickLinks";
import { Infomation } from "../../components/footer/Infomation";
import { FollowUs } from "../../components/footer/FollowUs";
import { Text } from "../../common/components/Text";

export const Footer = () => {
  return (
    <Box className={"footer"}>
      <Box className={"footer__content"}>
        <ContactInfo />
        <QuickLinks />
        <Infomation />
        <FollowUs />
      </Box>
      <Text
        content={"Beae’stemplate © 2022. All Rights Reserved."}
        padding={"27px 0"}
        textAlign={"center"}
      />
    </Box>
  );
};
