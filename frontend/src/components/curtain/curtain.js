import Button from "../Button/Button";
import "../LandingScreen/LandingScreen.css";
import "./curtain.css";
import ChestaLogo from "../Images/Logos/ChestaLogo.png";
import IITGLogo from "../Images/Logos/IITGLogo.png";

function Curtain(props) {
  return (
    <div className="curtain">
      <div className="curtainContainer">
        <div className="HeaderTitle">
          <div>
            <p className="ChestaTitle_s">Che</p>
            <p className="ChestaTitle">mical </p>
            <p className="ChestaTitle_s">S</p>
            <p className="ChestaTitle">cience & </p>
          </div>
          <div>
            <p className="ChestaTitle_s">T</p>
            <p className="ChestaTitle">echnology </p>
            <p className="ChestaTitle_s">A</p>
            <p className="ChestaTitle">ssociation</p>
          </div>
        </div>
        <div className="curtainLogoContainer">
          <img src={IITGLogo} className="HeaderLogos" alt="IITGLogo"></img>
          <img src={ChestaLogo} className="HeaderLogos" alt="ChestaLogo"></img>
        </div>
      </div>

      <div className="ButtonsGroupCurtain">
        <Button title="About" path="/"></Button>
        <Button title="BRs" path="/BRs"></Button>
        <Button title="Gallery" path="/Gallery"></Button>
        <Button title="Contact" path="/Contact"></Button>
      </div>
    </div>
  );
}

export default Curtain;
