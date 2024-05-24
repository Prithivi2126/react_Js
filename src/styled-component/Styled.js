import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "palevioletred",
    secondary: "tomato",
    text: "black",
    background: "white",
  },
  fontSize: {
    normal: "1.5em",
    big: "2em",
  },
};


const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 3px;
  color: white;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  margin-top: 1em;
`;

//Extending Styles:
//You can create new styled components by extending existing ones.
const ButtonSubmit = styled(Button)`
  background: ${(props) => props.theme.colors.secondary};
`;

const StyledHeading = styled.h1`
  color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.text};
  font-size: ${(props) =>
    props.big ? props.theme.fontSize.big : props.theme.fontSize.normal};
  text-align: center;
  margin-bottom: 1em;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  font-size: 1em;
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2em;
  background: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Styled = () => (
  <ThemeProvider theme={theme}>
    <CenteredContainer>
      <Form>
        <StyledHeading primary big>
          Login Form
        </StyledHeading>
        <label>
          Username:
          <Input type="text" name="username" />
        </label>
        <label>
          Password:
          <Input type="password" name="password" />
        </label>
        <div>
          <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </div>
      </Form>
    </CenteredContainer>
  </ThemeProvider>
);

export default Styled;
