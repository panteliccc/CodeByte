import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";
import { getAuthSession } from "@/app/utils/auth";

interface Session {
  user?: User;
}

interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const pageString = searchParams.get("page");
  const POST_PER_PAGE = 6;
  const session: Session | null = await getAuthSession();


  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const page = pageString ? parseInt(pageString, 10) : 1;
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
          ...(session &&
            ({ userEmil: session?.user?.email } as { userEmil: string })),
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.post.count({
        where: {
          ...(session &&
            ({ userEmil: session?.user?.email } as { userEmil: string })),
        },
      }),
    ]);

    return NextResponse.json({ posts, count }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Somthing went wrong!" },
      { status: 500 }
    );
  }
};
