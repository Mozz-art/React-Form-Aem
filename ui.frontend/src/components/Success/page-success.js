import React from "react";
import { MapTo } from "@adobe/aem-spa-component-mapping";
import { Container, ButtonSubmit, PosH2} from "./page-success.styled";
import "./index.css";
import { Link } from "react-router-dom";

const Success = () => {
  const nameData = localStorage.getItem("nameData");
  const emailData = localStorage.getItem("emailData");
  const gitData = localStorage.getItem("gitHubData");
  const teamData = localStorage.getItem("teamData");
  const Age = localStorage.getItem("Age");
  const birthdayData = localStorage.getItem("birthdayData");
  const graduationData = localStorage.getItem("graduationData");
  const certificatesData = localStorage.getItem("certificateData");
  const institutionData = localStorage.getItem("institutionData");
  
  let dateAr = birthdayData.split('-');
  let newDate = dateAr[1] + '-' + dateAr[2] + '-' + dateAr[0];

  const clearLocalStorage = () => {
    localStorage.clear();
  } 
  return (

    <Container>
    <PosH2>
    <h2>Your data has been sent successfully!</h2>
    <h2>Full Name: {nameData}</h2>
    <h2>Email: {emailData}</h2>
    <h2>Birthday: {newDate}</h2>
    <h2>Age: {Age} years</h2>
    <h2>GitHub: {gitData}</h2>
    <h2>Certificates: {certificatesData}</h2>
    <h2>Team Name: {teamData}</h2> 
    <h2>Institution: {institutionData}</h2> 
    <h2>Graduation: {graduationData} </h2> 
    <Link to={"/content/reactapp/us/en/home.html"}><ButtonSubmit onClick={clearLocalStorage}>✔ Return</ButtonSubmit></Link>
  </PosH2>
  </Container>

    
  
)}

export default MapTo("reactapp/components/content/page-success")(Success);

// onSubmit={handleSubmit}