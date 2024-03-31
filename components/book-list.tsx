import { API_URL } from "../app/(home)/page";
import Link from "next/link";
import styles from "../styles/book-list.module.css";

async function getBookList(name: string) {
  const res = await fetch(`${API_URL}?name=${name}`);
  return res.json();
}

export default async function BookList({ name }: { name: string }) {
  const books = (await getBookList(name)).results.books;
  return (
    <div className={styles.book_list}>
      {books.map((book) => {
        return (
          <div className={styles.card}>
            <img src={book.book_image} />
            <div className={styles.cardDetail}>
              <div className={styles.textDetail}>
                <p>{book.title}</p>
                <p>{book.author}</p>
              </div>
              <Link href={book.buy_links[0].url}>Buy now &rarr;</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
