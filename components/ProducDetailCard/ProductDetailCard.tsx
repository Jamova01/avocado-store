import styles from "./styles.module.scss";

const ProductDetailCard = (props: TProduct) => {
  const { name, image, price, sku } = props;
  return (
    <article className={styles["product-detail-card"]}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p className={styles["product-card__price"]}>{price}</p>
      <span className={styles["product-card__sku"]}>SKU: {sku}</span>
    </article>
  );
};

export default ProductDetailCard;
