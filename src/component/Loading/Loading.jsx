import loadingImg from "../../assets/loading.gif";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingImg} alt="loading" />
    </div>
  );
};

export default Loading;
