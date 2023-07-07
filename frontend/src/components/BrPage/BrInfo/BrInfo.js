import './BrInfo.css';

// import img from "../../../Data/+${this.props.image}"


const BrInfo = (props) => {

    return (<div className='BRContainer'>
        <div className='imageContainer' style={{width: "10vw"}} >
            <img src={props.brDetails.image} alt='Student_photo' className='brImage' />
            {/* <img src="https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png" alt='Student_photo' className='brImage' /> */}
        </div>
        <div className='infoContainer'>
            <div className='nameSection'>
                <p className='name'>{props.brDetails.name}</p>
            </div>
            <div className='contactSection'>
                <p className='contactDetails contact'>{props.brDetails.email1?"Contact":""}</p>
                <p className='contactDetails' style={{fontStyle: "normal",fontSize: "1.2vw"}} >{props.brDetails.email1}</p>
                <p className='contactDetails' style={{fontStyle: "normal",fontSize: "1.2vw"}} >{props.brDetails.email2}</p>
            </div>
        </div>
    </div>)
}
export default BrInfo;