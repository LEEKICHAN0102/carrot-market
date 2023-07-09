import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import client from "@/libs/server/client";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  console.log(req.session.user);
  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });

  const jsonString = JSON.stringify(profile, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );

  res.setHeader("Content-Type", "application/json");
  res.end(jsonString);
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
  cookieName: "carrotSession",
  password: "123456789asdfqwerzxcv123456789asdfzxcvqwer",
});
