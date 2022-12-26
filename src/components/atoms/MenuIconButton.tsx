import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      aria-label="ページ一覧"
      icon={<HamburgerIcon />}
      bg="transparent"
      display={{ base: "flex", md: "none" }}
      size="sm"
      _hover={{ opacity: "0.4" }}
      onClick={onOpen}
    />
  );
});
