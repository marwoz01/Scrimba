import profilePicture from "../assets/profile-picture.png";

export default function Info() {
  return (
    <header>
      <img src={profilePicture} alt="profile-picture" />
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <p>laurasmith.website</p>
      <div className="buttons">
        <button className="email-btn btn">
          <i className="fa-solid fa-envelope"></i> Email
        </button>
        <button className="linkedin-btn btn">
          <i className="fa-brands fa-linkedin"></i> Linkedin
        </button>
      </div>
    </header>
  );
}
