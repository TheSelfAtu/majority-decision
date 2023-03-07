import type { NextApiRequest, NextApiResponse } from "next";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export default async function rooms(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const docRef = await addDoc(collection(db, "rooms"), {});
  res.status(200).json(docRef.id);
}
