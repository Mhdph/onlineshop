import React from "react";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: right;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/g6D7DfS/pexels-photo-6984661.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  text-align: right;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>ساخت حساب کاربری جدید</Title>
        <Form>
          <Input placeholder="نام خانوادگی" />
          <Input placeholder="نام" />
          <Input placeholder="نشانی الکترونیکی" />
          <Input placeholder="نام کاربری" />
          <Input placeholder="تکرار رمز عبور" />
          <Input placeholder="رمز عبور" />
          <Agreement>
            با ایجاد یک حساب کاربری، با پردازش اطلاعات شخصی خود موافقت می کنم
            داده ها مطابق با <b>خط مشی رازداری</b>
          </Agreement>
          <Button>ساخت حساب کاربری</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
