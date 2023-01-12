import type { NextApiRequest, NextApiResponse } from "next";
const { cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("firebase-token"); // 秘密鍵を取得
const admin = require("firebase-admin");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const COLLECTION_NAME = "users";
  //　初期化する
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    });
  }
  const db = getFirestore();
  const targetDoc = "diX2TZ5OGIRhH59LYnTp"; //書き換える
  if (req.method === "POST") {
    const docRef = db.collection(COLLECTION_NAME).doc();
    const insertData = {
      datano: "1",
      name: "Symfo",
      email: "symfo@example.com",
    };
    docRef.set(insertData);
  } else if (req.method === "PATCH") {
    const docRef = db.collection(COLLECTION_NAME).doc(targetDoc);
    const updateData = {
      datano: "1",
      name: "updateSynfo",
      email: "updateSynfo@example.com",
    };
    docRef.set(updateData);
  }
  res.status(200);
}
