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
        <Button title="About" path="/" color="rgba(0, 0, 0, 0.29)" ></Button>
        <Button title="BRs"  path="/BRs" color="rgba(0, 0, 0, 0.29)"></Button>
        <Button title="Gallery" path="/Gallery" color="rgba(0, 0, 0, 0.29)"></Button>
        <Button title="Contact" path="/Contact" color="rgba(0, 0, 0, 0.29)"></Button>
      </div>
    </div>
  );
}

export default LandingScreen;
