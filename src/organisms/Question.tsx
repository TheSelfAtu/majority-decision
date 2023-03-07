import { Divider } from "@chakra-ui/react";
import { H1 } from "../uiParts/heading/h1";
import { Radio } from "../uiParts/Radio";

export function Question({
  children,
  onClick,
}: {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <>
      <H1>当てはまるのはだれ？</H1>
      <Divider />
      {/* <button onClick={() => insertUser()}>Insert User</button> */}
      <Radio></Radio>
    </>
  );
}
