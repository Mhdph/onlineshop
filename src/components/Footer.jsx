import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  MailOutline,
  Room,
  Phone,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-size: 36px;
`;
const Desc = styled.p`
  margin: 20px 0px;
  text-align: right;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const Socialcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  text-align: right;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  text-align: right;
`;

function Footer() {
  return (
    <Container className="font-markazi">
      <Left>
        <Logo>Mahdi.</Logo>
        <Desc>
          لورم ایپسوم یک متن ساختگی است که از آن برای ساخت و طراحی سایت استفاده
          میشود با لورم ایپسوم مشکلی وجود ندارد برای نوشتن متن های ساحتگی که
          بعدا قرار است جایگزین شود
        </Desc>
        <SocialContainer>
          <Socialcon color="385999">
            <Facebook />
          </Socialcon>
          <Socialcon color="E4405F">
            <Instagram />
          </Socialcon>
          <Socialcon color="55ACEE">
            <Twitter />
          </Socialcon>
          <Socialcon color="E60023">
            <Pinterest />
          </Socialcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>لینک های مفید</Title>
        <List>
          <ListItem>خانه</ListItem>
          <ListItem>کارت</ListItem>
          <ListItem>آقایان</ListItem>
          <ListItem>خانم ها</ListItem>
          <ListItem>زیورآلات</ListItem>
          <ListItem>حساب من</ListItem>
          <ListItem>پیگیری سفارش</ListItem>
          <ListItem> علاقه مندی ها</ListItem>
          <ListItem>قوانین</ListItem>
          <ListItem>قوانین</ListItem>
        </List>
      </Center>
      <Right>
        <Title>تماس با ما</Title>
        <p className="mb-4">
          <Room />
          مشهد-بلوار فکوری-فکوری ۲۴
        </p>
        <p className="mb-4">
          <Phone />
          ۰۹۱۵۸۲۸۷۸۰۷
        </p>
        <p className="mb-4">
          <MailOutline /> MahdiParivash@Protonmail.com
        </p>
      </Right>
    </Container>
  );
}

export default Footer;
