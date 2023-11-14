import React from "react";
import { Box } from "./Box";

export const Avatar = ({ children }) => {
  return (
    <Box w={"130px"} h={"130px"} borderRadius={"50%"} overflow="hidden">
      {children}
    </Box>
  );
};
