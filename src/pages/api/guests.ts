import { z } from "zod";
import type { NextApiRequest, NextApiResponse } from "next";
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const guest = z.object({
  roomId: z.string(),
  name: z.string(),
});

type Guest = z.infer<typeof guest>;

function validate(params: Record<string, string>): Guest {
  // return guest.safeParse(params);
  return guest.parse(params);
}

export default async function guests(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { roomId, name } = validate(req.body);

  const docRef = await setDoc(doc(db, "rooms", roomId, "guests", roomId), {
    name: req.body.name,
  });

  res.status(200).json("");
}
