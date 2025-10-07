import styled, { css } from "styled-components";

const Logo = styled.img`
  width: 90px;
  height: 62px;
  margin-left: 80px;
`;

const SocialMediaLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  transition: 0.5s ease;
  border-radius: 30%;

  &:hover {
    background: linear-gradient(45deg, #ff0080, #7928ca);
    border-radius: 50%;
    box-shadow: 0 0 15px #ff0080;
    transform: scale(1.1);
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #ffb36c;
  display: flex;
  margin: 0px;
  align-items: center;
  gap: 80px;
`;

const sharedStyles = css`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 500;
  font-style: normal;
`;
const Title = styled.h2`
  ${sharedStyles}
  font-size: 16px;
`;

const Text = styled.p`
  ${sharedStyles}
  font-size: 12px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Logo src="../public/logo.png" alt="logo" />
      <div>
        <Title>Address</Title>
        <Text>Svobody str. 35</Text>
        <Text>Kyiv</Text>
        <Text>Ukraine</Text>
      </div>
      <div>
        <Title>Contact us</Title>
        <div>
          <SocialMediaLogo src="../public/instagram.png" alt="instagram" />
          <SocialMediaLogo src="../public/facebook.png" alt="facebook" />
          <SocialMediaLogo src="../public/whatsapp.png" alt="whatsapp" />
        </div>
      </div>
    </FooterContainer>
  );
}
