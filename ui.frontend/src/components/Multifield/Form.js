import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { InputCss } from "./Form.styled";
import { ErrorCss } from "./Form.styled";
import { MidContainer } from "./Form.styled";

const Form = ({ form }) => {
  // const textBasic = "Eu deveria ser uma Label";
  // const place = "Eu sou um Placeholder";
  // const defaultSrc = "https://via.placeholder.com/150";

  return (
    <>
      {form.map(({ placeholderText, label, required, type, error }, index) => (
        <MidContainer key={index}>
          <label>{ label }
          <InputCss placeholder={placeholderText} required={required} type={type}/>
          <ErrorCss>{ error }</ErrorCss>
          </label>
        </MidContainer>
      ))}
    </>
  );
};

Form.defaultProps = {
  form: [
    {
      label: "label",
      required: "false",
      placeholderText: "Eu sou um Placeholder",
      error: "Eu sou um erro",   
    },
  ],
};

export default MapTo("reactapp/components/multifield")(Form);