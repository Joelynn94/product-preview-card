import styles from "./ProductTitle.module.css";

function ProductTitle({ title }) {
  return <h1 className={styles.productTitle}>{title}</h1>;
}

export default ProductTitle;
