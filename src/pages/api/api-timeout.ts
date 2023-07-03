import { TIMEOUT } from "@/constants/TIMEOUT";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve) => setTimeout(resolve, TIMEOUT));

  res.status(200).send("OK");
};

export default handler;
