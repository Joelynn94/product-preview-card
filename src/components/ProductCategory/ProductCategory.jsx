import styles from "./ProductCategory.module.css";

function ProductCategory({ category }) {
  return <h3 className={styles.productCategory}>{category}</h3>;
}

export default ProductCategory;
