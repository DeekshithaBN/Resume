import react from "react";
import "./MyProfile.css";
import Img from "./profile.jpeg";

const MYPROFILE = {     
  firstName: "Achal",
  lastName: "Jagadeesh",
  email: "achaljagadeeshsc@gmail.com",
  phoneNumber: "9110615254",
  college: "MCE",
  usn: "4MC19CS003",
  activityPoints: "25",
  branch: "CSE",
  year: "4",
  photo: Img,
};

const PersonalInfo = ({ profile }) => {
  return (
    <div className="personalinfo-card">
      <div className="category-heading">
        <h1 className="personal">Personal Information</h1>
      </div>
      <div className="img">
        <img src={profile.photo}></img>
      </div>
      <div className="personal-details">
      <h3>
        {profile.firstName} {profile.lastName}
      </h3>
      <h3>Student, {profile.college}</h3>
      <h3>
        {profile.email} | {profile.phoneNumber}
      </h3>
      </div>
    </div>
  );
};

const AcademicDetails = ({profile}) =>{
    return(
        <div className="detailsinfo-card">
      <div className="category-heading">
        <h1 className="personal">Academic Details</h1>
      </div>
      <div className="personal-details">
      <h3>
        USN : {profile.usn} | Year : {profile.year} | Branch : {profile.branch}
      </h3>
      <h3>Student, {profile.college}</h3>
      <h3>
      Activity Points : {profile.activityPoints}
      </h3>
      </div>
    </div>
    );
}
const MyProfile = () => {
  return (
    <div className="myprofile">
      <div className="title">
        <span className="mycerti">My Profile</span>
      </div>
      <PersonalInfo profile={MYPROFILE} />
      <AcademicDetails profile={MYPROFILE} />
    </div>
  );
};

export default MyProfile;
