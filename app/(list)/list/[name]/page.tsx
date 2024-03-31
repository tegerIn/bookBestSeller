import { Suspense } from "react";
import BookList from "../../../../components/book-list";

export default async function BookDetail({
  params: { name },
}: {
  params: { name: string };
}) {
  return (
    <div>
      <h4>{name.replaceAll("_", " ")}</h4>
      <Suspense fallback={<h1>Loading book list</h1>}>
        {/* @ts-expect-error Async Server Component */}
        <BookList name={name} />
      </Suspense>
    </div>
  );
}
