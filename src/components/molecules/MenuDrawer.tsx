import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickSetting: () => void;
  onClickUsermanagement: () => void;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickSetting,
    onClickUsermanagement
  } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent bg="transparent">
          <DrawerBody p={0} mr={0} opacity={0.8}>
            <Button
              w="100%"
              height="10%"
              borderRadius="0"
              color="blackAlpha.800"
              onClick={onClickHome}
            >
              TOP
            </Button>
            <Button
              w="100%"
              height="10%"
              borderRadius="0"
              color="blackAlpha.800"
              onClick={onClickUsermanagement}
            >
              ユーザーー覧
            </Button>
            <Button
              w="100%"
              height="10%"
              borderRadius="0"
              color="blackAlpha.800"
              onClick={onClickSetting}
            >
              設定
            </Button>
            <Button
              borderRadius="0"
              variant="unstyled"
              w="100%"
              height="70%"
              onClick={() => onClose()}
              _focus={{ bg: "transparent" }}
              //tapしたときの色を消す。
            ></Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
