import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { getCookie } from "../../cookies/Cookies";
import Items from "./Items";
const Section = styled.div`
  display: flex;
  @media (max-width: 70em) {
    flex-direction: column-reverse;
  }
`;
const ConatinerForm = styled.div`
  width: 60%;
  height: 100vh;
  margin-top: 50px;
  @media (max-width: 70em) {
    width: 100%;
    /* flex-direction: column; */
  }
  p {
    color: red;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  div {
    padding-left: 40px;
  }
  input {
    width: 220px;
    height: 30px;
    margin-right: 50px;
    border-radius: 10px;
  }
  span {
    margin-right: 20px;
    text-transform: capitalize;
  }
  .number {
    margin-top: 50px;
    /* border-bottom: 1px solid ${(props) => props.theme.text}; */
  }
  .address {
    margin-top: 50px;
    margin-bottom: 40px;
    input {
      height: 60px;
      width: 80%;
    }
  }
  .csv {
    width: 120px;
  }
`;
const FormName = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 600;
  line-height: 3rem;
  letter-spacing: 3px;
  margin-bottom: 30px;
`;
const Container = styled.div`
  width: 30%;
  height: 100%;
  /* margin: 0 auto; */
  margin-bottom: 30px;
  margin-top: 50px;
  margin-right: 30px;
  @media (max-width: 70em) {
    width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 64em) {
    width: 60%;
    margin: 0 auto;
  }
  @media (max-width: 48em) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 30em) {
    width: 100%;
    /* margin: 0 auto; */
  }
`;
const ProductConatiner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.text};
`;

const PriceConatiner = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  margin-right: 70px;
`;
const CartButton = styled.button`
  display: inline-block;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  width: 80%;

  outline: none;
  border: 2px solid ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontsm};
  padding: 20px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(0.9);
  }
  &::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
  margin-top: 20px;
  margin-left: 26px;
  margin-bottom: 20px;
  @media (max-width: 64em) {
    padding: 5px 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  @media (max-width: 30em) {
    margin-left: 0;
    font-size: ${(props) => props.theme.fontxs};
    width: 100%;
  }
`;
const ProductTitle = styled.div`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontsm};
  letter-spacing: 2px;
  margin-left: 30px;
  div {
    margin-top: 20px;
  }
  @media (max-width: 30em) {
    margin-left: 10px;
  }
`;
const NoProductTitle = styled.div`
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontxl};
  letter-spacing: 2px;
  font-weight: 600;
  margin-left: 30px;
  div {
    margin-top: 20px;
  }
  @media (max-width: 30em) {
    margin-left: 10px;
  }
`;
const NoConatinerForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;
const Cart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [cartItems, setCartItems] = useState(
    (getCookie("product") && JSON.parse(getCookie("product"))) || []
  );
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const price = cartItems.map(
      ({ Product_quantity, Product_price }, index) => {
        return Product_quantity * Product_price;
      }
    );

    let totPrice = 0;
    for (let i = 0; i < price.length; i++) {
      totPrice += price[i];
    }
    setTotal(totPrice);
  }, [cartItems]);

  return (
    <Section>
      {cartItems.length > 0 ? (
        <>
          <ConatinerForm>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormName>Shipping Form</FormName>
              <div>
                <span>First Name</span>
                <input
                  type="text"
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
                {errors.firstName && <p>First name is required.</p>}
                <span>Last Name</span>
                <input type="text" {...register("lastName")} />
              </div>
              <div className="number">
                <span>Number#</span>
                <input type="text" {...register("number")} />
              </div>
              <div className="address">
                <span>Adress</span>
                <input
                  type="text"
                  {...register("address", { required: true, maxLength: 150 })}
                />
                {errors.address && <p>Address is required.</p>}
              </div>
              <div className="card">
                <span>card Number</span>

                <input
                  type="text"
                  {...register("card_number", {
                    required: true,
                    maxLength: 11,
                  })}
                />
                {errors.card_number && <p>Card Number is required.</p>}

                <span>CSV</span>
                <input
                  type="text"
                  className="csv"
                  {...register("csv", { required: true, maxLength: 3 })}
                />
                {errors.csv && <p>csv is required.</p>}
              </div>
              <CartButton onClick={handleSubmit}>Place Order</CartButton>
            </form>
          </ConatinerForm>
          <Container>
            <ProductConatiner>
              {cartItems.map(
                (
                  {
                    PRoduct_image,
                    Product_Name,
                    Product_price,
                    Product_quantity,
                  },
                  index
                ) => (
                  <Items
                    PRoduct_image={PRoduct_image}
                    Product_Name={Product_Name}
                    Product_price={Product_price}
                    Product_quantity={Product_quantity}
                    setCartItems={setCartItems}
                    index={index}
                  />
                )
              )}
              <PriceConatiner>
                <ProductTitle>Total</ProductTitle>
                <div>${total}</div>
              </PriceConatiner>
            </ProductConatiner>
          </Container>
        </>
      ) : (
        <NoConatinerForm>
          <NoProductTitle>The cart is empty</NoProductTitle>
        </NoConatinerForm>
      )}
    </Section>
  );
};

export default Cart;
