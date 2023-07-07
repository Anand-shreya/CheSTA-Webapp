import Button from "../Button/Button";
import IITGLogo from "../Images/Logos/IITGLogo.png";
import "./LandingScreen.css";
import Text from "./CheSTA_text";

function LandingScreen() {
  return (
    <div className="HeaderContainer">
      <img src={IITGLogo} className="IITGLogo Logo" alt="IITGLogo"></img>
      <Text></Text>
      <div className="Buttonsgroup">
        <Button title="About" path="/" className="landingScreenButton" ></Button>
        <Button title="BRs" path="/BRs" className="landingScreenButton"></Button>
        <Button title="Gallery" path="/Gallery" className="landingScreenButton"></Button>
        <Button title="Contact" path="/Contact" className="landingScreenButton"></Button>
      </div>
    </div>
  );
}

export default LandingScreen;
