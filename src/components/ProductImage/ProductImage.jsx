import styles from "./ProductImage.module.css";

function ProductImage({
  desktopSrc,
  mobileSrc,
  alt,
  media = "(min-width: 768px)",
}) {
  return (
    <picture className={styles.productPicture}>
      <source media={media} srcSet={desktopSrc} />
      <img src={mobileSrc} alt={alt} className={styles.productImage} />
    </picture>
  );
}

export default ProductImage;
