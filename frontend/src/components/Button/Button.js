import { Link } from "react-router-dom";
import "./Button.css";
import styled from 'styled-components'


function Buttton(props) {
    const { title,active,path,color } = props;
    return (
        <Link to={`${active ? "":path}`} className={`LandingPage-Buttons ${active ? "active" : ""}`} style={{background:`${color?color:"rgba(19, 183, 165, 0.25)"}`}}>{title}</Link>
    )
}

export default Buttton;