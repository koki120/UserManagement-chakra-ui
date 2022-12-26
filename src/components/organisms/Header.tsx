import { FC, memo, useCallback } from "react";
import {
  Flex,
  Heading,
  Link,
  Spacer,
  Box,
  useDisclosure
} from "@chakra-ui/react";

import { MenuIconButton } from "../atoms/MenuIconButton";
import { MenuDrawer } from "../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const navigate = useNavigate();

  const onClickHome = useCallback(() => {
    navigate("/home"), onClose();
  }, []);
  const onClickSetting = useCallback(() => {
    navigate("/home/setting"), onClose();
  }, []);
  const onClickUsermanagement = useCallback(() => {
    navigate("/home/usermanagement"), onClose();
  }, []);
  //ルートは変わらないのでこのエラーは多分大丈夫

  return (
    <>
      <Flex
        as="nav"
        bg="blackAlpha.500"
        align="center"
        justify="space-between"
        padding={{ base: 1, md: 3 }}
      >
        <Flex as="a" mr={8} align="center" _hover={{ cursor: "pointer" }}>
          <Heading
            as="h1"
            fontSize={{ base: "md", md: "lg" }}
            onClick={onClickHome}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex fontSize="sm" display={{ base: "none", md: "flex" }}>
          <Box pr={5}>
            <Link onClick={onClickUsermanagement}>ユーザーー覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <Spacer />
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUsermanagement={onClickUsermanagement}
      />
    </>
  );
});
