import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

export function useRoomGuests(): [string, () => Promise<void>] {
  const [guestName, setGuestName] = useState("");

  const createRoom = useCallback(async () => {
    const guestId: AxiosResponse<string> = await axios.post("/api/guests", {
      name: guestName,
    });
  }, []);
  return [guestName, createRoom];
}
