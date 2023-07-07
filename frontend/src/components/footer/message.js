import React from "react";
import './footerStyle.css';
function MessageUs(){

    return(
        <div>
            <div className="header">Message Us</div>
            <form action="" method="post">
                <div style={{position: "relative"}} >
                <input type="text" name="message" id="message" placeholder="Message" className="box" />
                <button type="sumit" className="Button">Submit</button>
                </div>
            </form>
        </div>
    )
};
export default MessageUs;