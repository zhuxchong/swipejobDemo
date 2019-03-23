import styled from "styled-components";
import img from "../static/test.gif";

export const MainWrapper = styled.div`
  width: 1025px;

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

export const Description = styled.div`
  width: 100%;
  padding: 1% 0%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  flex: 3;
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
    height: 120px;
  }
  @media (max-width: 370px) {
    background-size: 100px 100px;
    background-repeat: no-repeat;
    background-position: top 50% right 40%;
    flex: 2;
    height: 100px;
  }
  @media (max-height: 823px) and (min-height: 736px) {
    height: 140px;
    background-size: 120px 120px;
  }
  @media (max-height: 1024px) and (min-height: 824px) {
    height: 150px;
    background-size: 130px 130px;
    background-position: top 50% right 20%;
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
  @media (max-height: 1025px) and (min-height: 1000px) {
    padding: 1% 1.5%;
    flex: 3;

    p {
      margin: 0;
      font-size: 16px;
    }
    h3 {
      margin: 0;
      font-size: 18px;
    }
    h4 {
      margin: 0;
      font-size: 17px;
      color: red;
    }
  }
  @media (max-height: 823px) and (min-height: 667px) {
    padding: 1% 1.5%;
    flex: 3;

    p {
      margin: 0;
      font-size: 13px;
      color: red;
    }
    h3 {
      margin: 0;
      font-size: 16px;
    }
    h4 {
      margin: 0;
      font-size: 15px;
    }
  }
  @media (max-height: 1366px) and (min-height: 1025px) {
    padding: 1% 1.5%;
    flex: 3;

    p {
      margin: 0;
      font-size: 20px;
    }
    h3 {
      margin: 0;
      font-size: 25px;
    }
    h4 {
      margin: 0;
      font-size: 25px;
    }
  }
`;
export const DetailTimeTable = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 1% 0%;
  display: flex;
  flex-direction: column;
  flex: 5;
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
      font-size: 15px;
      margin-bottom: 0px;
    }
    p {
      color: gray;
      text-indent: 10px;
      font-size: 12px;
      line-height: 15px;
    }
  }
  @media (max-height: 812px) and (min-height: 667px) {
    p {
      color: gray;
      text-indent: 10px;
      font-size: 18px;
      line-height: 20px;
      margin-top: 5px;
    }
  }
  @media (max-height: 1025px) and (min-height: 812px) {
    h1 {
      font-size: 20px;
      margin-bottom: 0px;
    }
    p {
      color: gray;
      text-indent: 10px;
      font-size: 20px;
      line-height: 25px;
      margin-top: 5px;
    }
  }
  @media (max-height: 1366px) and (min-height: 1026px) {
    h1 {
      font-size: 30px;
      margin-bottom: 0px;
    }
    p {
      text-indent: 10px;
      font-size: 30px;
      line-height: 40px;
      margin-top: 10px;
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
  flex: 1.5;
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
  flex: 2;
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
