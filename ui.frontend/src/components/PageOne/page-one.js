import { MapTo } from "@adobe/aem-spa-component-mapping";
import React, { useRef, useState } from 'react'
import { InputCss, Container, InputBirthday, ButtonSubmit, NavBar, InputCheckbox, Error } from "./page-one.styled";
import { useHistory } from "react-router-dom";
import "./index.css";

const PageOne = () => {
  const name=useRef();
  const email=useRef();
  let history = useHistory();
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorBirthday, setErrorBirthday] = useState("");
  const [birthday, setBirthday] = useState("");
  const [birthdayValidate, setBirthdayValidate] = useState(false);


 const handleSubmit = () => {
  if (name && email && birthdayValidate == true) {
  localStorage.setItem("nameData", name.current.value);
  localStorage.setItem("emailData", email.current.value);
  history.push("/content/reactapp/us/en/SecondTab.html");
  
  }
}
  const handleBlurName = ({ target }) => {
    const regex = /[A-Za-z]{4} /;
    if (!regex.test(target.value)) {
      setErrorName("visible");
    } else {
      setErrorName("");
    }
  };
  const handleBlurEmail = ({ target }) => {
    const regex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/;
    if (!regex.test(target.value)) {
      setErrorEmail("visible");
    } else {
      setErrorEmail("");
    }
  };
  const handleBlurBirthday = () => {
    const date = new Date();
     const year = date.getFullYear();
     const newDate = parseInt(birthday.slice(0, 4));
     const Age = year - newDate;
     if (year - newDate < 120) {
       setErrorBirthday("");
       setBirthdayValidate(true);
       localStorage.setItem("birthdayData", birthday);
       localStorage.setItem("Age", Age);
     } else {
       setErrorBirthday("visible");
       setBirthdayValidate(false);
     }
 
   };

  return (
    <Container>
      <div>
      <h3>Team Sign Up</h3>
      <NavBar>
        <p>Basic</p>
        <p>Social</p>
        <p>Certificates</p>
        </NavBar>
        <form onSubmit={handleSubmit}>
          
          <InputCss>Full Name * 
          <input onBlur={handleBlurName} placeholder="Foo Bar" type="text" required ref={name}/>
          <Error show={errorName}>Please enter your Name</Error>
          </InputCss>
          <InputCss>Nickname
          <input placeholder="Juanito" type="text"/>
          </InputCss>
          <InputCss>Email *
          <input onBlur={handleBlurEmail} placeholder="foo@bar.com" type="email" required ref={email}/>
          <Error show={errorEmail}>Please enter your Email</Error>
          </InputCss>
          <InputCss>Phone
          <input placeholder="(83)00000-0000" type="tel"/>
          </InputCss>
          <h1>Birthday *</h1>
          <Error show={errorBirthday}>Please enter your Age</Error>
          <InputBirthday>
          <input
              value={birthday}
              onBlur={handleBlurBirthday}
              onChange={(date) => setBirthday(date.target.value)}
              type="date"
              placeholder="yyyy/mm/dd"
              required />
             </InputBirthday>
            <Error show={errorBirthday}>Age invalid</Error>
          <InputCheckbox>I accept the terms and privacy
          <input type="checkbox" required/>
          </InputCheckbox>
          <Error>Please confirm the terms</Error>
          
    
  <div className="button-container">
    <ButtonSubmit>Next</ButtonSubmit>
  </div>
        </form>
      </div>
  </Container>
    
    )
}

export default MapTo("reactapp/components/content/page-one")(PageOne);

// onSubmit={handleSubmit}