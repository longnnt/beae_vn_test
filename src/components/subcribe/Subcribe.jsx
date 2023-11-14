import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";
import { Button } from "../../common/components/button/Button";

export const Subcribe = () => {
  return (
    <Box className={"subcribe"}>
      <Text className={"subcribe__title"} content={"KITO"} />
      <Box className={"subcribe__content"}>
        <Box className={"subcribe__text"}>
          <Text
            content={"Join our list and get 20% off "}
            fontWeight={"700"}
            lineHeight={"2.2rem"}
            textAlign={"left"}
          />
          <Text
            content={` your first purchase!`}
            fontWeight={"700"}
            lineHeight={"2.2rem"}
            textAlign={"left"}
          />
        </Box>
        <Box
          className={"subcribe__submit"}
          borderRadius={"10px 0px 0px 10px"}
          border={"1px solid rgba(236, 128, 160, 1)"}
        >
          <img src="/envelope.png" alt="email" width={"16px"} />
          <input
            type="text"
            placeholder="Enter your email"
            style={{
              fontSize: "1.6rem",
              fontWeight: "400",
              lineHeight: "2.6rem",
              opacity: "0.7",
              border: "none",
              outline: "none",
              marginLeft: "10px",
            }}
          />
        </Box>
        <Button
          className={"subcribe__button"}
          content={"subcribe"}
          bg={"rgba(236, 128, 160, 1)"}
          borderRadius={"0px 10px 10px 0px"}
        />
      </Box>
    </Box>
  );
};
