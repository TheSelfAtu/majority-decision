import { Alert, AlertIcon } from "@chakra-ui/react";
import { NextPage } from "next";
import { useCreateRoom } from "../hooks/rooms";
import { Button } from "../uiParts/Button";
import { H1 } from "../uiParts/heading/h1";

const RoomBuilder: NextPage = () => {
  const [roomId, createRoom] = useCreateRoom();

  return (
    <div>
      <H1>多数決会場を作成する</H1>
      <Button onClick={createRoom}>作成する</Button>
      {roomId && (
        <Alert status="success">
          <AlertIcon />
          多数決会場へのリンクをコピーしました
        </Alert>
      )}
    </div>
  );
};

export default RoomBuilder;
