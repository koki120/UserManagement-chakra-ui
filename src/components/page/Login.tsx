import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack
} from "@chakra-ui/react";
import { FC, memo } from "react";

export const Login: FC = memo(() => {
  return (
    //親要素に高さがないとそもそもalignItems="center"しようがない
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Box bg="teal" borderRadius="2xl" padding={6}>
        <Stack>
          <Heading as="h1" textAlign="center" size="lg" color="white">
            ユーザー管理アプリ
          </Heading>
          <Divider />

          <Input
            _focus={{ boxShadow: "none" }}
            placeholder="ユーザーID"
            borderColor="white"
            border="2px"
            _placeholder={{ color: "white" }}
          />
          <Button w="100%" colorScheme="whiteAlpha">
            ログイン
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
