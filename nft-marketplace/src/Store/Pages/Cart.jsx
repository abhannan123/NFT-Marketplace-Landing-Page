import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 50px;
`;
const ProductConatiner = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid ${(props) => props.theme.text};
`;
const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
`;
const ImageBox = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
    /* object-fit: contain; */
  }
`;
const ProductTitle = styled.div`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontsm};
  letter-spacing: 2px;
  margin-left: 40px;
`;
const SemiContainer = styled.div`
  display: flex;
  margin-right: 40px;
  align-items: center;
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
const PriceConatiner = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  margin-right: 70px;
`;

const Cart = () => {
  return (
    <Container>
      <ProductConatiner>
        <SubContainer>
          <ImageBox>
            <img src="/images/download.jpeg" alt="" />
            <ProductTitle>Product name</ProductTitle>
          </ImageBox>
          <SemiContainer>
            <img src="/images/plus-svgrepo-com.svg" alt="" />
            <div>
              <span>1</span>

              <img
                src="/images/minus-svgrepo-com.svg"
                alt=""
                className="minus"
              />
              <img
                src="/images/delete-svgrepo-com.svg"
                alt=""
                className="delete"
              />
            </div>
          </SemiContainer>
        </SubContainer>
        <PriceConatiner>
          <ProductTitle>Total</ProductTitle>
          <div>$0</div>
        </PriceConatiner>
      </ProductConatiner>
    </Container>
  );
};

export default Cart;
