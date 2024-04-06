import Header from "../Shared/Header/Header";
import { useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
Navbar
const NewsDetails = () => {
    const {id}=useParams();
    return (
        <div>
            <Header></Header>
      <Navbar></Navbar>  
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;