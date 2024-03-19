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
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json( 
      { error: "Somthing went wrong!" },
      { status: 500 }
    );
  }
};
export async function POST(req: Request) {
  const session: Session | null = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();

    const comment = await prisma.comment.create({
      data: { ...body, userEmil: session?.user?.email},
    });
    console.log(comment);
    

    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
}
