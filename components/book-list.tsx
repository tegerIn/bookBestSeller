import { API_URL } from "../app/(home)/page";
import Link from "next/link";

async function getBookList(name: string) {
  const res = await fetch(`${API_URL}?name=${name}`);
  return res.json();
}

export default async function BookList({ name }: { name: string }) {
  const books = (await getBookList(name)).results.books;
  return (
    <div>
      {books.map((book) => {
        return (
          <div>
            <img src={book.book_image} />
            <span>{book.title}</span>
            <span>{book.author}</span>
            <Link href={book.buy_links[0].url}>Buy now &rarr;</Link>
          </div>
        );
      })}
    </div>
  );
}
