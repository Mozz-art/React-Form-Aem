import React, { useRef, useState } from 'react'
import { MapTo } from "@adobe/aem-spa-component-mapping";
import { Container, ButtonSubmit, InputCss, NavBar, Error} from "./page-two.styled";
import "./index.css";
import { useHistory } from "react-router-dom";

const PageTwo = () => {
const git=useRef();
const history = useHistory();
const [errorGit, setErrorGit] = useState("");

const handleBlurGit = ({ target }) => {
  const regex = /[A-Za-z]{4}/;
  if (!regex.test(target.value)) {
    setErrorGit("visible");
  } else {
    setErrorGit("");
  }
};
const handleSubmit = () => {
      localStorage.setItem("gitHubData", git.current.value);
      history.push("/content/reactapp/us/en/ThirdTab.html");
  }

  return (
    <div>
    
    <Container>
    <h3>Team Sign Up</h3>
    <NavBar>
      <p>Basic</p>
      <p>Social</p>
      <p>Certificates</p>
      </NavBar>
      <form onSubmit={handleSubmit}>
      <InputCss>Linkedin 
          <input placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" type="text"/>
          <ButtonSubmit>+ More </ButtonSubmit>
          </InputCss>
          <InputCss>GitHub *
          <input onBlur={handleBlurGit} placeholder="https://github.com/foobar" type="text" required ref={git}/>
          <Error show={errorGit}>Please enter your GitHub Link</Error>
          </InputCss>
        <ButtonSubmit>Next</ButtonSubmit>
    </form>        
  
  </Container>
  </div>
)}

export default MapTo("reactapp/components/content/page-two")(PageTwo);
