import "./User.css";

import emailIcon from "../../assets/email.svg";
import phoneIcon from "../../assets/phone.svg";
import locationIcon from "../../assets/location.svg";
import Loading from "../Loading/Loading";
const User = ({ user, isLoading }) => {
  const { picture, name, email, phone, location, dob, registered } = user;
  console.log(user);
  return (
    <main className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="box">
            <div className="left">
              <img src={picture?.large} alt="" className="userImg" />
            </div>
            <h2 className="right">
              {name?.title} {name?.first} {name?.last}
            </h2>
          </div>
          <div className="box">
            <div className="left">
              <img src={emailIcon} alt="" className="icon" />
            </div>
            <p className="right">{email}</p>
          </div>
          <div className="box">
            <div className="left">
              <img src={phoneIcon} alt="" className="icon" />
            </div>
            <p className="right">{phone}</p>
          </div>
          <div className="box">
            <div className="left">
              <img src={locationIcon} alt="" className="icon" />
            </div>
            <p className="right">
              {location?.city} - {location?.country}
            </p>
          </div>
          <p>Age: {dob?.age}</p>
          <p>Register Date: {registered?.date.substring(0, 10)}</p>
        </>
      )}
    </main>
  );
};

export default User;
