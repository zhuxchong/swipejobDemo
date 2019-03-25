import styled from "styled-components";
import img from "../../static/test.gif";
export const DescriptionComponent = styled.div`
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
  /*particular for iphone X*/
  @media (max-height: 823px) and (min-height: 736px) {
    height: 140px;
    background-size: 120px 120px;
  }
  /*particular for ipad*/
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
  /* for phone deviecs X*/
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
  /*for pad*/
  @media (max-height: 1025px) and (min-height: 824px) {
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
      color: black;
    }
  }
  /*particular for iphone X -> full screen devices*/
  @media (max-height: 823px) and (min-height: 667px) {
    padding: 1% 1.5%;
    flex: 3;

    p {
      margin: 0;
      font-size: 13px;
      color: black;
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
  /*particular for ipad pro*/
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
