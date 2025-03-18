import React, { useState } from "react";
import ProductCard from "./Component/ProductCard";
import "./App.css";

const productsData = [
  { id: 1, name: "Product A", description: "Description A", avgRating: 0, totalRatings: 0 },
  { id: 2, name: "Product B", description: "Description B", avgRating: 0, totalRatings: 0 },
  { id: 3, name: "Product C", description: "Description C", avgRating: 0, totalRatings: 0 }
];

const App = () => {
  const [products, setProducts] = useState(productsData);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating: ((product.avgRating * product.totalRatings + newRating) / (product.totalRatings + 1)).toFixed(1),
              totalRatings: product.totalRatings + 1
            }
          : product
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Product Ratings</h1>
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
        ))}
      </div>
    </div>
  );
};

export default App;
