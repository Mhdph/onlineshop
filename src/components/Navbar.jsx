import { useState, React } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { mobile } from "../responsive";

function Navbar() {
  const mainNav = [
    {
      display: "تماس با ما",
      path: "/contact",
    },
    {
      display: "ثبت نام",
      path: "/login",
    },
    {
      display: "ورود",
      path: "/login",
    },
    {
      display: "خانه",
      path: "/",
    },
  ];
  let [open, setOpen] = useState(false);
  return (
    <Container className="font-markazi">
      <Wrapper>
        <Left>
          <ShoppingCartIcon className="cursor-pointer" />
          <input
            type="search"
            className="md:inline w-40 md:w-auto ml-4 border-[0.25px] p-1 rounded text-center"
            placeholder="جست و جو"
          />
        </Left>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <FaTimes size={30} style={{ color: "#11111" }} />
          ) : (
            <FaBars size={30} style={{ color: "#11111" }} />
          )}
        </div>

        <div
          className={`md:flex md:items-center md:pb-0 pb-24 border-b-4 md:border-none gap-8 absolute flex flex-col justify-center items-center md:flex-row md:static  bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {mainNav.map((item, index) => (
            <Link key={index} to={item.path}>
              <span>{item.display}</span>
            </Link>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export default Navbar;
