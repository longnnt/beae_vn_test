import React from "react";
import { Box } from "../../common/components/Box";
import { BenefitItem } from "./BenefitItem";

const BENEFIT_LIST = [
  {
    id: 1,
    title: "Free shipping",
    desc: "Free  shipping orders  from $150",
    url: "/car.png",
  },
  {
    id: 2,
    title: "Gift/Discount codes",
    desc: "Many discount codes every day",
    url: "/gift.png",
  },
  {
    id: 3,
    title: "Money return",
    desc: "Return it  within  30 days",
    url: "/return.png",
  },
];

export const Benefit = () => {
  return (
    <Box className={"benefit"}>
      {BENEFIT_LIST?.map((item) => {
        return (
          <BenefitItem
            url={item?.url}
            title={item?.title}
            desc={item?.desc}
            key={item?.id}
          />
        );
      })}
    </Box>
  );
};
