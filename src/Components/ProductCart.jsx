import React from "react";

const ProductCart = ({ productData }) => {
  const title = productData?.title;
  const image = productData?.thumbnail;
  return (
    <div className="product-card">
      <img className="img" src={image} alt="product" />
      <span>{title}</span>
    </div>
  );
};

export default ProductCart;
