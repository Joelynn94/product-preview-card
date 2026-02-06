import styles from "./ProductTitle.module.css";

function ProductTitle({ title }) {
  return <h2 className={styles.productTitle}>{title}</h2>;
}

export default ProductTitle;
