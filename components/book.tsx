import Link from "next/link";
import styles from "../styles/book.module.css";

interface IBookProps {
  list_name: string;
}

export default function Book({ list_name }: IBookProps) {
  return (
    <Link
      className={styles.book}
      href={`list/${list_name.replaceAll(" ", "-")}`}
    >
      {list_name}
    </Link>
  );
}
