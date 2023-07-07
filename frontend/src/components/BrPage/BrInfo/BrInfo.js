import './BrInfo.css';

// import img from "../../../Data/+${this.props.image}"


const BrInfo = (props) => {

    return (<div className='BRContainer'>
        <div className='imageContainer' style={{width: "10vw"}} >
            <img src={props.brDetails.image} alt='Student_photo' className='brImage' />
        </div>
        <div className='infoContainer'>
            <div className='nameSection'>
                <p className='name'>{props.brDetails.name}</p>
            </div>
            <div className='contactSection'>
                <p className='contactDetails'>Contact</p>
                <p className='contactDetails' style={{fontStyle: "normal",fontSize: "1vw"}} >{props.brDetails.phone}</p>
                <p className='contactDetails' style={{fontStyle: "normal",fontSize: "1vw"}} >{props.brDetails.email}</p>
            </div>
        </div>
    </div>)
}
export default BrInfo;