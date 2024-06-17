import styled from "styled-components";

export const ProductDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 300px;
    position: relative;
    // border: 1px solid;
    border-radius: 8px;
    margin: 10px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }
  .img {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .btn {
    left: 600px;
  }
`;
