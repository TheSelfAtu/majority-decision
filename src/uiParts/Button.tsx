import { Button as ChakraButton } from "@chakra-ui/react";
import React from "react";

export function Button({
  children,
  onClick,
}: {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <ChakraButton colorScheme={"teal"} size={"lg"} onClick={onClick}>
      {children}
    </ChakraButton>
  );
}
