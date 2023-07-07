import LandingScreen from "../components/LandingScreen/LandingScreen";
import About from "../components/About/About";
import Footer from "../components/footer/footer";
// import React, { useState, useEffect } from 'react';

import "./pages.css";
import Loader from "../components/Loader/Loader";
function LandingPage() {

    // const [isLoading, setIsLoading] = useState(true);
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //     try {
    //         const startTime = Date.now();

    //         const response = await fetch('http://localhost:8000/');
    //         const jsonData = await response.json();

    //         const elapsedTime = Date.now() - startTime;
    //         const minimumLoaderTime = 5000; 

    //         if (elapsedTime < minimumLoaderTime) {
    //         await new Promise(resolve => setTimeout(resolve, minimumLoaderTime - elapsedTime));
    //         }

    //         setData(jsonData);
    //         setIsLoading(false);
    //     } catch (error) {
    //         console.log('Error fetching data:', error);
    //         setIsLoading(false);
    //     }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div>
            {/* {isLoading ? (
                <Loader />
            ) : (
                <div>
                {data ? (
                    <div>{data}</div>
                ) : (
                    <div>No data available.</div>
                )}
                </div>
            )} */}
            {/* <Loader/> */}
            <div className="LandingPage">
                <LandingScreen></LandingScreen>
                <About></About>
                <div id="footerRoute">
                    <Footer></Footer>
                </div>
            </div>

            <div className="grad"></div>
        </div>
    )
}
export default LandingPage;