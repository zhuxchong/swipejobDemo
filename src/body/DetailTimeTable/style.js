import styled from "styled-components";
export const DetailTimeTableWrapper = styled.div`
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
  /*for iphone x/6/7/8/plus*/
  @media (max-height: 823px) and (min-height: 667px) {
    p {
      color: gray;
      text-indent: 10px;
      font-size: 18px;
      line-height: 20px;
      margin-top: 5px;
    }
  }
  /*for ipad*/
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
  /*for ipad pro*/
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
