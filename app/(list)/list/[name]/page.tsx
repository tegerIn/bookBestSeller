import { Suspense } from "react";
import BookList from "../../../../components/book-list";
import styles from "../../../../styles/list.module.css";

export default async function BookDetail({
  params: { name },
}: {
  params: { name: string };
}) {
  return (
    <div className={styles.list}>
      <h1>{name.replaceAll("_", " ")}</h1>
      <Suspense fallback={<h1>Loading book list</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <BookList name={name} />
      </Suspense>
    </div>
  );
}
