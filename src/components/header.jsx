import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import { Link } from "react-router-dom";


export default function Header() {
    const HeaderWrapper = styled.header`
      background-color: red;
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      // padding: 10px 20px;
      // border: 1px solid red;
    `;
    const NavLinks = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 20px;

      h2 {
        font-size: 18px;
        cursor: pointer;
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: 500;
        font-style: normal;
      }
    `;

    const SignUpButton = styled.button`
      padding: 8px 16px;
      border: none;
      background: #007bff;
      color: black;
      border-radius: 8px;
      cursor: pointer;
      background: #ffb36c;
      font-family: "Montserrat Alternates", sans-serif;
      font-weight: 500;
      font-style: normal;
    `;
    const Text = styled.h2`
    color: black;
    `
    const Logo = styled.img`
    width: 82px;
    height: 56px;
    // margin-left: 100px;
    `
    const Avatar = styled.img`
    width: 50px;
    height: 50px;
    // margin-right: 100px;
    `
    const handleClick = () => {
      
    }
  return (
    <HeaderWrapper
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f0f0f0",
        borderBottom: "1px solid #ccc",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <NavLinks>
        <div
          style={{
            display: "flex",
            gap: "200px",
          }}
        >
          <Logo src={logo} alt="logo" />
          <Text>Who we are</Text>
          <Text>Contacts</Text>
          <Text>Menu</Text>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <SignUpButton component={Link} to='/signup'>Sign up</SignUpButton>
          <Avatar src={avatar} alt="avatar" />
        </div>
      </NavLinks>
    </HeaderWrapper>
  );
}
