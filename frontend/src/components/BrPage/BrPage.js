import Curtain from "../curtain/curtain";
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer";
import "./BrPage.css";
import Batch from "./Batch/Batch";
import BRsData from "../../Data/BRs.json";
import { useEffect } from "react";
// const dummyData = [
//   [
//     {
//       year: 2021,
//       image:
//         "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png",
//       name: "Pratham G",
//       phone: "9023100020",
//       email: "prathamG@gmail.com",
//     },
//     {
//       year: 2021,
//       image:
//         "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png",
//       name: "Pratham G",
//       phone: "9023100020",
//       email: "prathamG@gmail.com",
//     },
//   ],
//   [
//     {
//       year: 2022,
//       image:
//         "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png",
//       name: "Pratham G",
//       phone: "9023100020",
//       email: "prathamG@gmail.com",
//     },
//     {
//       year: 2022,
//       image:
//         "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png",
//       name: "Pratham G",
//       phone: "9023100020",
//       email: "prathamG@gmail.com",
//     },
//   ],
//   [
//     {
//       year: 2023,
//       image:
//         "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png",
//       name: "Pratham G",
//       phone: "9023100020",
//       email: "prathamG@gmail.com",
//     },
//     {
//       year: 2023,
//       image:
//         "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png",
//       name: "Pratham G",
//       phone: "9023100020",
//       email: "prathamG@gmail.com",
//     },
//   ],
//   [
//     {
//       year: 2024,
//       image:
//         "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png",
//       name: "Pratham G",
//       phone: "9023100020",
//       email: "prathamG@gmail.com",
//     },
//     {
//       year: 2024,
//       image:
//         "https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60.png",
//       name: "Pratham G",
//       phone: "9023100020",
//       email: "prathamG@gmail.com",
//     },
//   ],
// ];

const BrPage = ({ userData }) => {
  useEffect(() => {
    fetch("/BRs", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((BRsData) => {
        console.log(BRsData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="BRsPage">
      {/* <div className="sticky"> */}
      {/* <Curtain /> */}
      <NavBar></NavBar>
      {/* </div> */}
      <ul className="allBrInfo">
        {/* {BRsData.map((brInfoByYear) => (
          <div className="brInfoByYear">
            <div className="batchDisplay">
              <div className="bulletBatch"></div>
              <p className="batchYear">BATCH OF {brInfoByYear[0].year}</p>
            </div>
            <Batch info={brInfoByYear} />
          </div>
        ))} */}
      </ul>
      <Footer />
      <div className="grad"></div>
    </div>
  );
};
export default BrPage;
