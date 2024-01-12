import React from "react";
import { Box } from "../../common/components/Box";
import { Text } from "../../common/components/Text";
import { ProudOfItem } from "./ProudOfItem";

const PROUD_LIST = [
  {
    id: 1,
    number: "20+",
    title: "Total top services",
    desc: "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.",
  },
  {
    id: 2,
    number: "15+",
    title: "Countries",
    desc: "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.",
  },
  {
    id: 3,
    number: "98%",
    title: "Positive Feedback",
    desc: "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.",
  },
  {
    id: 4,
    number: "2,558",
    title: "Usual users",
    desc: "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.",
  },
];

export const ProudOf = ({ title }) => {
  console.log(window.innerWidth);
  return (
    <Box className="proud-of">
      <Text
        className={"proud-of__title"}
        content={title}
        fontWeight={"700"}
        textTransform={"capitalize"}
      />
      <Box className={"proud-of__list"}>
        {PROUD_LIST.map((item) => {
          return (
            <ProudOfItem
              number={item?.number}
              title={item?.title}
              desc={item?.desc}
              key={item?.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};
