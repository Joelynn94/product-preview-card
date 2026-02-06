import styles from "./ProductCard.module.css";

function ProductCard({ children }) {
  return <article className={styles.productCard}>{children}</article>;
}

export default ProductCard;
