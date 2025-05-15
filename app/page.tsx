import Image from "next/image";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  // const client = new PrismaClient();

  // const res = await client.users.create({
  //   data: {
  //     username: "Jashu",
  //     password: "123",
  //     age: 25,
  //   },
  // });

  // console.log(res, "1234");
  return (
    <div className="">
      <h1>Hi There</h1>
    </div>
  );
}
