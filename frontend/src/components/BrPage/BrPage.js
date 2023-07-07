import Curtain from "../curtain/curtain";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import "./BrPage.css";
import Batch from "./Batch/Batch";
import BRsData from "../../Data/BRs.json";
import { useEffect } from "react";

const BrPage = ({ userData }) => {
  return (
    <div className="BRsPage">
      <NavBar></NavBar>
      <ul className="allBrInfo">
        {BRsData.map((brInfoByYear) => (
          <div className="brInfoByYear">
            <div className="batchDisplay">
              <div className="bulletBatch"></div>
              <p className="batchYear">BATCH OF {brInfoByYear[0].year}</p>
            </div>
            <Batch info={brInfoByYear} />
          </div>
        ))}
      </ul>
      <Footer />
      <div className="grad"></div>
    </div>
  );
};
export default BrPage;
