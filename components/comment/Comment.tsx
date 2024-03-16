import Image from "next/image";

interface Props {
  data: Data;
}

interface User {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string;
}

interface Data {
  _id: string;
  createdAt: Date;
  desc: string;
  userEmail: string;
  user: User;
  postSlug: string;
}

function Comment(props: Props) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-8 h-8 -z-10">
          <Image
            src={props.data.user.image}
            alt=""
            fill
            priority={true}
            className="object-cover relative rounded-full"
          />
        </div>
        <div className="flex flex-col text-xs text-gray">
          <span className="font-medium">{props.data.user.name}</span>
          <span>{props.data.createdAt.toString().slice(0, 10)}</span>
        </div>
      </div>
      <p className="text-base font-light">{props.data.desc}</p>
    </div>
  );
}

export default Comment;
