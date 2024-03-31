import Book from "../../components/book";
import styles from "../../styles/home.module.css";

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
    <div className={styles.container}>
      <h1>The New York Times Best Seller Explorer</h1>
      {category.map((item) => (
        <Book list_name={item.list_name} />
      ))}
    </div>
  );
}
