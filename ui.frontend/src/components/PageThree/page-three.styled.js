import styled from "styled-components";


const Container = styled.div`
     display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    border-radius: 30px;
    height: 85vh;
    max-height: 1080px;
    background-color: white;
    h3{
      align-self: flex-start;
      
      margin: 2% 65% 0 0;
    }
    form{
      margin-bottom: 21%;
      height: 70%;
    }


    `
export { Container };

const InputCss = styled.label`
    margin: 0 0 0 1%;
    
    
input{
  color: #767676;
  font-size: 15px;
  font-weight: 500;
  width: 95%;
  border: 2px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  margin: 1% 0 3% 1%;
}`;
export { InputCss };

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
   margin-left: 85%;
`
export { ButtonSubmit };

const NavBar = styled.nav`

  font-family: 'Nunito';
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4vh;
  margin-bottom: 5%;


p {
  font-size: 16px;
  font-family: 'Nunito';
  text-align: center;
  font-weight: 500;
  width: 100%;
  height: 4vh;
  padding-bottom: 1%;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #aaaaaa;
  cursor: pointer;

  :nth-child(3){
    
    border-bottom: 2px solid #074EE8;
    color: #074EE8;}
}
`
export { NavBar };

const Error = styled.p`
        margin: 0 0 2% 1%;
        color: #FF0000;
        font-size: 12px;
        visibility: ${(props) => (props.show === "visible" ? "visible" : "hidden")};
`
export { Error };
