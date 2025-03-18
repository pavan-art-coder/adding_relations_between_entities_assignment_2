import React from "react";
import PropTypes from "prop-types";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => (
  <div className="product-card">
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Average Rating: {product.avgRating} ({product.totalRatings} ratings)</p>
    <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;
