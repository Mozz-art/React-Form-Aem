import styled from "styled-components";

const Container = styled.div`
     display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    border-radius: 30px;
    height: 85vh;
    max-height: 1080px;
    background-color: white;
    h2{
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: #000000;
    }
    
    `
export { Container };

const PosH2 = styled.div`
  display: flex;
  width: 90%;
  align-items: flex-start;
  flex-direction: column;

`
export {PosH2}
const ButtonSubmit = styled.button`

    background: #074ee8;
   border-radius: 4px;
   color: white;
   font-size: 16px;
   font-family: "Inter";
   border: 0;
   width: 5em;
   height: 2.5em;
   text-decoration: none;
   padding: 0;
   cursor: pointer;
   margin-top: 10%;
   margin-left: 0%;
   align-self: end;
`
export { ButtonSubmit };
