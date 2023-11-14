import React from "react";
import { Box } from "../../common/components/Box";
import "./index.css";

export const Section = ({ children }) => {
  return <Box className="section">{children}</Box>;
};
