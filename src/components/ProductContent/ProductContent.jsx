import styles from "./ProductContent.module.css";

function ProductContent({ children }) {
  return <div className={styles.productContent}>{children}</div>;
}

export default ProductContent;
