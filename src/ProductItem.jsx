import React from "react";
import styles from "./ProductItem.module.css";

function ProductItem({ product, onIncrement, onDecrement, onDelete }) {
  const handleDoubleClick = () => {
    onDelete(product.id);
  };

  return (
    <div onDoubleClick={handleDoubleClick} className={styles.productItem}>
      <h2 className={styles.productHeader}>
        {product.name} - ${product.price}
      </h2>
      <p className={styles.productCount}>Количество: {product.count}</p>
      <button onClick={() => onIncrement(product.id)} className={styles.button}>
        +
      </button>
      <button onClick={() => onDecrement(product.id)} className={styles.button}>
        -
      </button>
    </div>
  );
}

export default ProductItem;
