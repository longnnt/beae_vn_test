import React from "react";
import { Box } from "../../common/components/Box";
import { OutTeamItem } from "./OutTeamItem";
import { Text } from "../../common/components/Text";

const OUTTEAM_LIST = [
  {
    id: 1,
    name: "Name 01",
    position: "CEO & Founder",
    desc: "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.",
    img: "/out_1.png",
  },
  {
    id: 2,
    name: "Name 01",
    position: "Personnel",
    desc: "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.",
    img: "/out_2.png",
  },
  {
    id: 3,
    name: "Name 01",
    position: "Personnel",
    desc: "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.",
    img: "/out_3.png",
  },
  {
    id: 4,
    name: "Name 01",
    position: "Personnel",
    desc: "Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit.",
    img: "/out_4.png",
  },
];

export const OutTeam = () => {
  return (
    <Box className={"out-team"}>
      <Text
        className={"out-team__title"}
        content={"out team"}
        fontWeight={"700"}
        textTransform={"capitalize"}
      />
      <Box className="out-team__list">
        {OUTTEAM_LIST?.map((item) => {
          return (
            <OutTeamItem
              name={item?.name}
              position={item?.position}
              url={item?.img}
              desc={item?.desc}
              key={item?.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};
