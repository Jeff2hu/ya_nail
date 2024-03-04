import { useNavigate } from "react-router-dom";
import ya_img from "../assets/ya.png";

const Profile = () => {
  const navigate = useNavigate();

  const navigateToHandPage = () => {
    navigate("/hand");
  };

  return (
    <div className="w-full h-[100%] flex justify-center items-center ">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={ya_img} className="max-w-sm shadow-2xl rounded-full" />
          <div>
            <h1 className="text-5xl font-bold">YA</h1>
            <p className="py-6">
              基拉瓜啦基拉瓜啦基拉瓜啦基拉瓜啦基拉瓜啦基拉瓜啦基拉瓜啦<br></br>
              基拉瓜啦基拉瓜啦基拉瓜啦基拉瓜啦基拉瓜啦基拉瓜啦基拉瓜啦
            </p>
            <button className="btn btn-primary" onClick={navigateToHandPage}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
