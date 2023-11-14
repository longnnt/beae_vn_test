import React from "react";
import { Box } from "../../common/components/Box";
import { DownArrow } from "../../common/components/DownArrow";
import { IconWithCount } from "../../common/components/IconWithCount";
import { Text } from "../../common/components/Text";
import { TextWithIcon } from "../../common/components/TextWithIcon";

const NAV_LIST = ["Home", "Shop", "Pages", "Contract"];

export const Nav = () => {
  return (
    <>
      <Box
        className={"nav-desktop"}
        h="110px"
        boxShadow="0px 2px 20px 0px rgba(26, 17, 20, 0.10)"
      >
        <Box display={"flex"} justifyContent={"space-between"} w="325px">
          {NAV_LIST.map((item, index) => {
            if (index === 2) {
              return (
                <TextWithIcon
                  key={index}
                  content={item}
                  fontWeight="700"
                  marginText={"5px"}
                >
                  <DownArrow />
                </TextWithIcon>
              );
            }
            return <Text key={index} content={item} fontWeight="700" />;
          })}
        </Box>
        <Text fontWeight={"800"} fontSize="54px" content={"KITO"} />
        <Box
          display={"inline-flex"}
          gap="30px"
          justifyContent={"space-between"}
        >
          <img src="/search.png" width={"25px"} height={"25px"} alt="search" />
          <IconWithCount count={0} bg="#1A1114">
            <img src="/cart.png" width={"25px"} height={"25px"} alt="cart" />
          </IconWithCount>
          <IconWithCount count={0} bg="#1A1114">
            <img src="/heart.png" width={"25px"} height={"25px"} alt="heart" />
          </IconWithCount>
        </Box>
      </Box>
      <Box className={"nav-mobile"}>
        <Text
          content={"KITO"}
          fontSize={"3rem"}
          lineHeight={"5.5rem"}
          fontWeight={"800"}
          textTransform={"uppercase"}
        />
        <img src="/bar.png" alt="" />
      </Box>
    </>
  );
};
