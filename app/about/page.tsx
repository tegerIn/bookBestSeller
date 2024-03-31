import styles from "../../styles/about.module.css";

export const metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutBox}>
        <h1>About us</h1>
        <div>
          <p>
            Welcome to the official explorer for The New York Times Best Seller
            list explorer.
          </p>
          <p>We hope you enjoy your stay!</p>
        </div>
      </div>
    </div>
  );
}
