import './BrInfo.css';

// import img from "../../../Data/+${this.props.image}"


const BrInfo = (props) => {

    return (<div className='BRContainer'>
        <div className='imageContainer'>
            <img src= {props.BRsData.img} alt='Student_photo' className='brImage' />
        </div>
        <div className='infoContainer'>
            <div className='nameSection'>
                <p className='name'>{props.brDetails.name}</p>
            </div>
            <div className='contactSection'>
                <p className='contactDetails contact'>Contact</p>
                <p className='contactDetails'>{props.brDetails.email1}</p>
                <p className='contactDetails'>{props.brDetails.email}</p>
            </div>
        </div>
    </div>)
}
export default BrInfo;