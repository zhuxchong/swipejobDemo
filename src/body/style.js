import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 1025px;
  /* height:100% */
  margin: 0 auto;
  box-shadow: inset 0 1px 2px 1px #000;
  background: white;
  display: flex;
  flex-direction: column;
  /*for mobile devices*/
  @media (max-width: 1024px) {
    width: 95%;
    height: 90vh;
  }
`;
export const JobAvaliable = styled.div`
  width: 100%;
  background-color: #0099cc;
  padding: 1% 0;
  flex: 1;
`;
export const AvaliableButton = styled.button`
  width: 20%;
  height: 70px;
  background-color: #ccffff;
  margin-left: 20%;
  background-color: lightblue;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 1024px) {
    height: 35px;
    font-size: 15px;
    width: 120px;
    margin-left: 5%;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1% 2%;
  width: 100%;
  flex: 2;
  @media (max-width: 768px) {
    padding: 1% 1%;
  }
`;
export const FooterBtn = styled.div`
  display: flex;
  color: #0066cc;
  text-decoration: underline;
  margin-top: 40px;
  font-weight: bold;
  &.accept {
    flex: 1;
    justify-content: space-around;
  }
  &.reject {
    flex: 1;
    justify-content: space-around;
  }
`;
