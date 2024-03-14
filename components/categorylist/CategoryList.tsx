import Link from "next/link";

interface Category {
  _id: string;
  slug: string;
  title: string;
}

const getData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/categories`,{
    cache:"no-store"
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

async function CategoryList() {
  const data: Category[] = await getData();
  
  return (
    <div className={`container flex items-center gap-5 overflow-auto`}>
      {data &&
        data?.map((item: any) => (
          <Link
            key={item.id}
            href={`/blog/?cat=${item.slug}`}
            className={`text-white bg-black text-lg px-3 py-2 rounded-md`}
          >
            {item.title}
          </Link>
        ))}
    </div>
  );
}

export default CategoryList;
