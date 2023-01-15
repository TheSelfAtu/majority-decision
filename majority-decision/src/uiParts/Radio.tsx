import { Radio as ChakraRadio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";

export function Radio() {
  const [value, setValue] = React.useState("1");
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="column">
        <ChakraRadio value="1" size={"lg"}>
          First
        </ChakraRadio>
        <ChakraRadio value="2" size={"lg"}>
          Second
        </ChakraRadio>
        <ChakraRadio value="3" size={"lg"}>
          Third
        </ChakraRadio>
      </Stack>
    </RadioGroup>
  );
}
