import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import { PRODUCT_URL } from "./Constant";
import { ProductDiv } from "./Style";

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [limit, setLimit] = useState(20);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  console.log("disabled", disabledButton);

  const url =
    PRODUCT_URL +
    `${limit}&skip=${
      count === 0 ? 0 : count * 20
    }&select=title,price,thumbnail`;

  useEffect(() => {
    getProductData();
  }, [limit, count]);

  useEffect(() => {
    console.log("inside use");
    if (productsData && productsData.length === 100) {
      console.log("productsData", productsData.length);
      setDisabledButton(true);
    }
  }, [productsData, count, limit]);
  const getProductData = async () => {
    try {
      setLoading(true);
      const data = await fetch(url);
      const jsonData = await data.json();
      if (jsonData) {
        setProductsData((prev) => [...prev, ...jsonData?.products]);
      }
      setLoading(false);
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  };

  const handleClicked = (event) => {
    event.preventDefault();
    setLimit((prev) => prev + 10);
    setCount(count + 1);
  };

  if (loading) return <div>Please Wait...! Data Loading</div>;
  if (errorMessage !== null)
    return <div>Something wrong happened...!, {errorMessage}</div>;

  return (
    <>
      <ProductDiv>
        {productsData && productsData.length
          ? productsData.map((product, index) => {
              return <ProductCart key={index} productData={product} />;
            })
          : null}
        <div className="btn">
          <button disabled={disabledButton} onClick={handleClicked}>
            Load more Products
          </button>
        </div>
      </ProductDiv>
    </>
  );
};

export default Products;
