import Button from "../Button/Button";
import "../LandingScreen/LandingScreen.css";
import "./navBar.css"
import ChestaLogo from "../Images/Logos/ChestaLogo.png";
import IITGLogo from "../Images/Logos/IITGLogo.png";

function NavBar(props) {
  return (
      <div className="navBarCurtain">
          <img src={ChestaLogo} className="HeaderLogos" alt="ChestaLogo"></img>
        <Button title="About" path="/"></Button>
        <Button title="BRs" path="/BRs"></Button>
        <Button title="Gallery" path="/Gallery"></Button>
        <Button title="Contact" path="/Contact"></Button>
      </div>

  );
}

export default NavBar;
