import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev/list";

async function getBookCategory() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`${API_URL}s`);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  const category = (await getBookCategory()).results;
  return (
    <div>
      <h1>The New York Times Best Seller Explorer</h1>
      {category.map((item) => (
        <li key={item.list_name}>
          <Link href={`list/${item.list_name.replaceAll(" ", "-")}`}>
            {item.list_name}
          </Link>
        </li>
      ))}
    </div>
  );
}
