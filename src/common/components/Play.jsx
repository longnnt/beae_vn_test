import React from "react";
import { Box } from "./Box";

export const Play = () => {
  return (
    <Box
      className={"play"}
      borderRadius={"50%"}
      bg={"rgba(255, 255, 255, 1)"}
      position={"absolute"}
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      cursor="pointer"
    >
      <img
        src="/play.png"
        className="play-img"
        alt="play"
        style={{
          position: "relative",
        }}
      />
    </Box>
  );
};
