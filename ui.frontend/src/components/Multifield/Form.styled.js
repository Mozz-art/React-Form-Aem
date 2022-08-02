import styled from "styled-components";

const InputCss = styled.input`
    
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
`;
export { InputCss };

const ErrorCss = styled.p`
    margin: 0;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: red;
    visibility: hidden;
    `
export { ErrorCss };    

const MidContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    flex-direction: column;
    margin-bottom: 20px;
    background-color: red;
    
    `
export { MidContainer };