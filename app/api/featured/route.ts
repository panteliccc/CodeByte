import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

const today = new Date();
const startDate = new Date(today);
startDate.setDate(today.getDate() - 30);

export async function GET() {
  try {
    const post = await prisma.post.findFirst({
      take: 1,
      where: {
        createdAt: {
          gte: startDate,
          lte: today,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return new NextResponse(JSON.stringify({ post }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
