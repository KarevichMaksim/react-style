import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3B3F40;
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const Header = styled.section`
  padding: 50px 0px 18px 0px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ImageDescription = styled.p`
  margin: 10px 0;
  text-align: center;
  letter-spacing: 2px;
  color: #F79237;
`;

export const Main = styled.main`
  position: relative;
  border-top: 5px solid #F79237;
`;

export const Form = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const Label = styled.label`
  margin: 0 0 20px;
  color: #F79237;
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  width: 100%;
  text-align: left;
`;

export const Input = styled.input`
  outline: none;
  display: block;
  width: 240px;
  height: 40px;
  border: 1px solid #d9d9d9;
  margin: 0 0 20px;
  padding: 10px 15px;
  box-sizing: border-box;
  font-weight: 400;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

  &:focus {
    outline: 1px solid #F79237;
  }

  &:active {
    outline: 1px solid #F79237;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: #F79237;
  width: 240px;
  height: 40px;
  border: 0;
  padding: 10px 15px;
  color: #ffffff;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
`;

export const ToggleForm = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background: #F79237;
  width: 80px;
  height: 30px;
  margin: -5px 0 0;
  color: #ffffff;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  border: none;

  & i {
    margin-right: 5px;
  }
`;

export const ToggleReset = styled.button`
  background: #f2f2f2;
  width: 100%;
  padding: 15px 40px;
  box-sizing: border-box;
  text-align: center;
  line-height: 18px;
  border: none;
  cursor: pointer;
  color: #666666;
  font-size: 13px;
`;

export const Footer = styled.footer`
  color: #F79237;
  padding: 8px 0 10px;

  & a {
    text-decoration: none;
    color: #F79237;
  }
`;

export const FooterDescription = styled.footer`
  margin: 0;
`;