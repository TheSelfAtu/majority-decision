import type { NextPage } from "next";
import axios from "axios";
import {
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Button } from "../../uiParts/Button";
import { useState } from "react";
import { useRouter } from "next/router";

const Room: NextPage = () => {
  const [guestName, setGuestName] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const addGuests = async () => {
    await axios.post("/api/guests", { roomId: id, name: guestName });
  };

  return (
    <VStack>
      <HStack>
        <FormControl isRequired>
          <FormLabel>名前</FormLabel>
          <Input
            placeholder="名前"
            value={guestName}
            onChange={(e) => {
              setGuestName(e.target.value);
            }}
          />
          <Button onClick={addGuests}>この名前で多数決に参加</Button>
        </FormControl>
      </HStack>
    </VStack>
  );
};

export default Room;
