import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/9bc3PZ5/pexels-photo-6984650.webp") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>ورود به حساب کاربری</Title>
        <Form>
          <Input placeholder="نام کاربری" />
          <Input placeholder="رمز عبور" />
          <Button>ورود</Button>
          <Link>رمز عبور خود را فراموش کرده اید؟</Link>
          <Link>ساخت اکانت جدید</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
