import styled from "styled-components";
export const ContactWrapper = styled.div`
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
  /*for iphone 5*/
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
