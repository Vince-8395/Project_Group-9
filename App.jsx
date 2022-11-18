import styled from 'styled-components';
import {FaFacebook, FaGoogle} from 'react-icons/fa';

function App() {
    return (
    <MainContainer>
         <WelcomeText>WelcomeToWeLearnApp</WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" />
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={GoogleBackground}>
          <FaGoogle />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
    );
}

const MainContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 90vh;
width: 30vw;
background: green #00FF00;
box-shadow: 0 8px 32px 0 green(31, 38, 135, 0.37);
backdrop-filter: yellow(0.5px);
border-radius: 20px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;
`;

const WelcomeText = styled.h2`
margin: 1rem 0 3rem 0;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 30%;
width: 50%;
`;

const ButtonContainer = styled.div`
margin: 1rem 0 2rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const LoginWith = styled.h5`
cursor: pointer;
`;

const HorizontalRule = styled.hr`
width: 70%;
height: 0.5rem;
border-radius: 0.7rem;
border: none;
background: linear-gradient(to right, #00FF00 0%, #FFFF00 90%);
background-color: #FFFFFF;
margin: 1.5rem 0 1.5rem 0;
backdrop-filter: blur(40px);
`;

const IconsContainer = styled.div`
display: flex;
justify-content: space-evenly;
margin: 3rem 0 3rem 0;
width: 90%;
`;

const ForgotPassword = styled.h4`
cursor: pointer;
`;

export default App;