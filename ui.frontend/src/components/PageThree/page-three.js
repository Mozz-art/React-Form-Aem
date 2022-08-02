import React, { useRef, useState } from 'react'
import { MapTo } from "@adobe/aem-spa-component-mapping";
import { Container, ButtonSubmit, InputCss, NavBar, Error} from "./page-three.styled";
import "./index.css";
import { useHistory } from "react-router-dom";

const PageThree = () => {
  const history = useHistory();
  const teamName=useRef();
  const institution=useRef();
  const certificates=useRef();
  const graduation=useRef();
  const [errorTeamData, setErrorTeamData] = useState("");
  const [errorInstitutionData, setErrorInstitutionData] = useState("");
  const [errorGraduationData, setErrorGraduationData] = useState("");
  const handleBlurTeamData = ({ target }) => {
    const regex = /[A-Za-z0-9]{4}/;
    if (!regex.test(target.value)) {
      setErrorTeamData("visible");
    } else {
      setErrorTeamData("");
    }
  };
  const handleBlurInstitutionData = ({ target }) => {
    const regex = /[A-Za-z]{4}/;
    if (!regex.test(target.value)) {
      setErrorInstitutionData("visible");
    } else {
      setErrorInstitutionData("");
    }
  };
  const handleBlurGraduationData = ({ target }) => {
    const regex = /[A-Za-z]{4}/;
    if (!regex.test(target.value)) {
      setErrorGraduationData("visible");
    } else {
      setErrorGraduationData("");
    }
  };

 const handleSubmit = () => {
    localStorage.setItem("teamData", teamName.current.value);
    localStorage.setItem("institutionData", institution.current.value);
    localStorage.setItem("graduationData", graduation.current.value);
    localStorage.setItem("certificateData", certificates.current.value);
    history.push("/content/reactapp/us/en/SuccessTab.html");
}

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
        <InputCss>Certificates
        <input placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" type="text" ref={certificates}/>
        <ButtonSubmit> + More </ButtonSubmit>
        </InputCss>
        <InputCss>Team Name*
        <input onBlur={handleBlurTeamData} placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" type="text" required ref={teamName}/>
        <Error show={errorTeamData}>Please enter your Team Name</Error>
        </InputCss>
        <InputCss>Institution *
        <input onBlur={handleBlurInstitutionData} placeholder="Universidade Federal da Paraíba" type="text" required ref={institution}/>
        <Error show={errorInstitutionData}>Please enter your Institution</Error>
        </InputCss>
        <InputCss>Graduation *
        <input onBlur={handleBlurGraduationData} placeholder="Ciências da Computação" type="text" required ref={graduation}/>
        <Error show={errorGraduationData}>Please enter your Graduation</Error>
        </InputCss>
        <ButtonSubmit>Next</ButtonSubmit>
    </form>        
  </div>
  </Container>

    
  
)}

export default MapTo("reactapp/components/content/page-three")(PageThree);

// onSubmit={handleSubmit}