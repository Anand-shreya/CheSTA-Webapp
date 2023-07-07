import Buttton from "../Button/Button";
function ButtonsGroup(){
    return(
        <div className="Buttonsgroup">
        <Buttton title="About" path="/"></Buttton>
        <Buttton title="BR's" path="/BRs"></Buttton>
        <Buttton title="Gallery" path="/Gallery"></Buttton>
        <Buttton title="Contact" path="/Contact"></Buttton>
      </div>
    )
}
export default ButtonsGroup;