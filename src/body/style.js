import styled from "styled-components";
import img from "../static/test.gif";
export const MainWrapper = styled.div`
  width: 1025px;
  margin: 10px auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const JobAvaliable = styled.div`
  width: 100%;
  background-color: #0099cc;
  padding: 1% 0;
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

export const Description = styled.div`
  width: 100%;
  padding: 1% 0%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
export const Pict = styled.div`
  height: 200px;
  flex: 3;
  background: url(${img});
  background-size: 180px 180px;
  background-repeat: no-repeat;
  background-position: top 50% right 10%;
  @media (max-width: 768px) {
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position: top 50% right 40%;
    flex: 2;
    height: 100px;
  }
`;
export const DetailDescription = styled.div`
  flex: 4;
  padding: 1% 2%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1% 1.5%;
    flex: 3;

    p {
      margin: 0;
      font-size: 10px;
    }
    h3 {
      margin: 0;
      font-size: 12px;
    }
    h4 {
      margin: 0;
      font-size: 11px;
    }
  }
`;
export const DetailTimeTable = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 1% 0%;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    line-height: 25px;
    margin: 0%;
    font-size: 18px;
  }
  h1 {
    text-align: center;
    margin-top: 0px;
    margin-bottom: 10px;
    font-size: 20;
  }
  @media (max-width: 768px) {
    padding: 1% 0%;
    h1 {
      font-size: 18px;
    }
    p {
      color: gray;
      text-indent: 10px;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;
export const Location = styled.div`
  border-top: solid gray 1px;
  border-bottom: solid gray 1px;
  width: 100%;
  padding: 3% 0%;
  display: flex;
  flex-direction: column;
  h4 {
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
    line-height: 20px;
  }
  p {
    margin: 0;
    line-height: 20px;
    text-align: center;
    color: #0066cc;
    text-decoration: underline;
  }
  @media (max-width: 375px) {
    padding: 2% 0%;
    h4 {
      font-size: 15px;
      line-height: 12px;
    }
    p {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;
export const Contact = styled.div`
  border-bottom: solid gray 1px;
  width: 100%;
  padding: 3% 0%;
  display: flex;
  flex-direction: column;
  h4 {
    margin-top: 0;
    margin-bottom: 10px;
    text-align: center;
    line-height: 20px;
  }

  p {
    margin: 0;
    line-height: 20px;
    text-align: center;
    color: #0066cc;
    text-decoration: underline;
  }
  @media (max-width: 375px) {
    padding: 2% 0%;
    h4 {
      font-size: 15px;
      line-height: 12px;
    }
    p {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1% 2%;
  width: 100%;
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
