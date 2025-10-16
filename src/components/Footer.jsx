import styled, { css } from "styled-components";

const Logo = styled.img`
  width: 90px;
  height: 62px;
  margin-left: 80px;
  @media screen and (max-width: 587px) {
    margin: 0;
  }
`;

const SocialMediaLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  transition: 0.6s ease;
  border-radius: 20%;

  &:hover {
    background: linear-gradient(45deg, #ff0080, #7928ca);
    border-radius: 50%;
    box-shadow: 0 0 15px #ff0080;
    transform: scale(1.2);
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #ffb36c;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 20px 0;
  align-items: center;
  gap: 80px;
  justify-content: space-evenly;
  @media screen and (max-width: 587px) {
    justify-content: center;
  }
  @media screen and (max-width: 507px) {
    gap: 30px;
  }
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

const FlexBasis = styled.div`
  @media screen and (max-width: 587px) {
    margin: 0 auto;
  }
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
      <FlexBasis>
        <Title>Contact us</Title>
        <div>
          <SocialMediaLogo src="../public/instagram.png" alt="instagram" />
          <SocialMediaLogo src="../public/facebook.png" alt="facebook" />
          <SocialMediaLogo src="../public/whatsapp.png" alt="whatsapp" />
        </div>
      </FlexBasis>
    </FooterContainer>
  );
}
