import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { Remove, Add } from "@mui/icons-material";
const Container = styled.div`
  text-align: right;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Image = styled.img`
  width: 100%;
  height: calc(90vh - 60px);
  object-fit: cover;
`;
const Title = styled.h1`
  font-weight: 200;
  text-align: right;
  font-size: 40px;
`;
const Desc = styled.p`
  margin: 20px 0;
  text-align: right;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 20px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-right: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  font-size: 20px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

function ProductList() {
  return (
    <Container className="font-markazi">
      <Navbar />
      <Wrapper>
        <InfoContainer>
          <Title>لباس راحتی</Title>
          <Desc>
            لورم ایپسوم یک متن ساختگی است برای طراحی سایت که کلمات تصادقی به ما
            میدهد
          </Desc>
          <Price>۲۰۰۰۰ R</Price>
          <FilterContainer>
            <Filter>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
              <FilterTitle>سایز</FilterTitle>
            </Filter>
            <Filter>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
              <FilterColor color="pink" />
              <FilterTitle>رنگ ها</FilterTitle>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>۱</Amount>
              <Add />
            </AmountContainer>
            <Button>اضافه کردن به سبد خرید</Button>
          </AddContainer>
        </InfoContainer>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;
