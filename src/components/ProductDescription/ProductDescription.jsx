import styles from "./ProductDescription.module.css";

function ProductDescription({ description }) {
  return <p className={styles.productDescription}>{description}</p>;
}

export default ProductDescription;
