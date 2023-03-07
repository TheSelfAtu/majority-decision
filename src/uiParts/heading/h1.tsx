import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

export function H1({ children }: { children: string }) {
  return (
    <Heading as="h1" size="2xl" noOfLines={1}>
      {children}
    </Heading>
  );
}
