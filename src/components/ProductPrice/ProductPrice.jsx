import styles from "./ProductPrice.module.css";

function ProductPrice({ currentPrice, originalPrice }) {
  return (
    <p className={styles.productPrice}>
      <strong className={styles.currentPrice}>${currentPrice}</strong>
      <del className={styles.originalPrice}>${originalPrice}</del>
    </p>
  );
}

export default ProductPrice;
