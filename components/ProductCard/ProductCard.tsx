import Link from "next/link";
import styles from "./ProductCard.module.scss";

const ProductCard = (props: TProduct) => {
  const { id, name, price, image } = props;

  return (
    <div className={styles.card} id={id}>
      <Link href={`product/${id}`}>
        <img src={image} alt="" />
        <div className={styles.card__body}>
          <h5 className={styles.card__body__title}>{name}</h5>
          <span>$ {price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
