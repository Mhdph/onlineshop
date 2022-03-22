import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-top: 20px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: right;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin-top: 20px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  text-align: right;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
function Cart() {
  return (
    <Container className="font-markazi">
      <Navbar />
      <Wrapper>
        <Title>سبد شما</Title>
        <Top>
          <TopButton>ادامه دادن خرید</TopButton>
          <TopTexts>
            <TopText>سبد خرید(۲)</TopText>
            <TopText>مورد علاقه ها(۱)</TopText>
          </TopTexts>
          <TopButton type="filled">نهایی کردن خرید</TopButton>
        </Top>
        <Bottom>
          <Summary>
            <SummaryTitle>جزییات سفارش</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>قیمت لباس</SummaryItemText>
              <SummaryItemPrice>۶۰۰۰۰۰</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>هزینه ارسال</SummaryItemText>
              <SummaryItemPrice>۱۰۰۰۰</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>تخفیف</SummaryItemText>
              <SummaryItemPrice>۱۰۰۰۰</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">هزینه کل</SummaryItemText>
              <SummaryItemPrice>۶۰۰۰۰۰</SummaryItemPrice>
            </SummaryItem>
          </Summary>
          <Info>
            <Product>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>۲</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>۳۰۰۰۰ R</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <ProductDetail>
            <Details>
              <ProductName>
                <b>محصول</b>:پرفکت استپس
              </ProductName>
              <ProductId>
                ۵۱۲ <b>:کد</b>
              </ProductId>
              <ProductColor color="black"></ProductColor>
              <ProductSize>
                ۳۷<b>:سایز</b>
              </ProductSize>
            </Details>
            <Image src="https://i.ibb.co/WcZbj67/1614188818-TD1-MTHU-SHOE-ANGLE-GLOBAL-MENS-TREE-DASHERS-THUNDER-b01b1013-cd8d-48e7-bed9-52db26515dc4.png" />
          </ProductDetail>
        </Bottom>
        <Hr />
        <Bottom>
          <Summary>
            <SummaryTitle>جزییات سفارش</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>قیمت</SummaryItemText>

              <SummaryItemPrice>۶۰۰۰۰۰</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>هزینه ارسال</SummaryItemText>

              <SummaryItemPrice>ندارد</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>تخفیف</SummaryItemText>
              <SummaryItemPrice>۱۰۰۰</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">مجموع</SummaryItemText>
              <SummaryItemPrice>۵۰۰۰۰۰</SummaryItemPrice>
            </SummaryItem>
          </Summary>
          <Info>
            <Product>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>۲</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>۳۰۰۰۰ R</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <ProductDetail>
            <Details>
              <ProductName>
                <b>محصول</b>:تی شرت خاکستری
              </ProductName>
              <ProductId>
                ۲۱۰ <b>:کد</b>
              </ProductId>
              <ProductColor color="gray"></ProductColor>
              <ProductSize>
                مدیوم<b>:سایز</b>
              </ProductSize>
            </Details>
            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
          </ProductDetail>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
