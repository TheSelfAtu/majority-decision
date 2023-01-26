import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

export function useCreateRoom(): [string, () => Promise<void>] {
  const [roomId, setRoomId] = useState("");

  const createRoom = useCallback(async () => {
    const roomId: AxiosResponse<string> = await axios.post("/api/rooms");
    const url = new URL(location.href);
    url.pathname = `/rooms/${roomId.data} `;

    navigator.clipboard.writeText(url.href).then(
      () => {
        setRoomId(url.href);
      },
      () => {
        alert("roomの作成に失敗しました");
      }
    );
  }, []);
  return [roomId, createRoom];
}
