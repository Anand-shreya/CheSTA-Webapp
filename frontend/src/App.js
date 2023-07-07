import Footer from "./components/footer/footer";
import Curtain from "./components/curtain/curtain";
import Student_profile from "./components/students/student_profile";
import About from "./components/About/About";
import LandingScreen from "./components/LandingScreen/LandingScreen";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import BrPage from "./components/BrPage/BrPage";
import Text from "./components/LandingScreen/CheSTA_text";
import Gallery from "./pages/Gallery/Gallery";
function App() {
  return (
    <div style={{ minWidth: "100%" }} >
      {/* <LandingScreen></LandingScreen> */}
      {/* <Footer /> */}
      {/* <Curtain></Curtain> */}
      {/* <Student_profile/> */}
      {/* <Student_profile/> */}
      {/* <About></About> */}
      {/* <LandingPage></LandingPage> */}
      <BrPage></BrPage>
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
