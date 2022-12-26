import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      baseStyle: { _focus: { boxShadow: "none" } }
      //クリック時のボタンの青枠が消える
    }
  },

  styles: {
    global: {
      body: {
        backgroundColor: "blackAlpha.800",
        color: "whiteAlpha.800"
      }
    }
  }
});
