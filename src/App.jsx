import React, { useState } from "react";
import ProductItem from "./ProductItem";
import styles from "./App.module.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
  ]);

  const addProduct = () => {
    const productDetails = prompt("Введите название и цену товара (через пробел):");
    if (productDetails) {
      const [name, price] = productDetails.split(' ');
      if (name && price) {
        const newProduct = { id: Date.now(), name, price: Number(price), count: 1 };
        setProducts(prev => [...prev, newProduct]);
      }
    }
  };

  const incrementCount = (id) => {
    setProducts(prev => prev.map(product =>
      product.id === id ? { ...product, count: product.count < 25 ? product.count + 1 : 25 } : product
    ));
  };

  const decrementCount = (id) => {
    setProducts(prev => prev.map(product =>
      product.id === id ? { ...product, count: Math.max(0, product.count - 1) } : product
    ).filter(product => product.count > 0));
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <div className={styles.appContainer}>
      <button onClick={addProduct} className={styles.addButton}>
        Добавить товар
      </button>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
}

export default App;
