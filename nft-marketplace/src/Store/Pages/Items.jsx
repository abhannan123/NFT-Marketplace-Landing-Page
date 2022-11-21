import React, { useState } from "react";
import styled from "styled-components";
import { setCookie } from "../../cookies/Cookies";

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
`;
const ImageBox = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
    /* object-fit: contain; */
  }
  @media (max-width: 30em) {
    margin-left: 20px;
  }
`;
const ProductTitle = styled.div`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontsm};
  letter-spacing: 2px;
  white-space: nowrap;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 30px;
  div {
    margin-top: 20px;
  }

  @media (max-width: 30em) {
    margin-left: 10px;
  }
`;
const SemiContainer = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
  @media (max-width: 30em) {
    margin-right: 10px;
  }

  img {
    width: 20px;
    cursor: pointer;
  }
  div {
    margin-left: 10px;
  }
  .minus {
    margin-left: 10px;
  }
  .delete {
    margin-left: 30px;
    cursor: pointer;
  }
  span {
    font-size: ${(props) => props.theme.fontmd};
  }
  .price {
    margin-top: 30px;
  }
`;
const Items = ({
  PRoduct_image,
  Product_Name,
  Product_price,
  Product_quantity,
  setCartItems,
  index,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(Product_price * Product_quantity);
  const addQuantity = () => {
    setCartItems((prev) => {
      let copyPrev = [...prev];
      copyPrev[index].Product_quantity = Product_quantity + 1;
      setCookie("product", JSON.stringify(copyPrev));

      return copyPrev;
    });
    setQuantity(Product_quantity + 1);
    setPrice(Product_price * (Product_quantity + 1));
  };
  const subtractQuantity = () => {
    setCartItems((prev) => {
      let copyPrev = [...prev];

      copyPrev[index].Product_quantity =
        Product_quantity > 1 ? Product_quantity - 1 : 1;
      setCookie("product", JSON.stringify(copyPrev));

      return copyPrev;
    });
    setPrice(Product_price * (Product_quantity > 1 ? Product_quantity - 1 : 1));
  };
  const deleteProduct = () => {
    setCartItems((prev) => {
      let copyPrev = [...prev];

      copyPrev.splice(index, 1);
      setCookie("product", JSON.stringify(copyPrev));

      return copyPrev;
    });

    // setPrice(Product_price * Product_quantity);
  };

  return (
    <SubContainer>
      <ImageBox>
        <img src={PRoduct_image || ""} alt="" />
        <ProductTitle>
          <span>{Product_Name || ""}</span>
          <div>${Product_price}</div>
        </ProductTitle>
      </ImageBox>
      <SemiContainer>
        <img src="/images/plus-svgrepo-com.svg" alt="" onClick={addQuantity} />
        <div>
          <span>{Product_quantity}</span>

          <img
            src="/images/minus-svgrepo-com.svg"
            alt=""
            className="minus"
            onClick={subtractQuantity}
          />
          <img
            src="/images/delete-svgrepo-com.svg"
            alt=""
            className="delete"
            onClick={deleteProduct}
          />
        </div>
      </SemiContainer>
    </SubContainer>
  );
};

export default Items;
