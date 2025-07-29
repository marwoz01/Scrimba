import twitterIcon from "../assets/twitter-icon.png";
import fbIcon from "../assets/fb-icon.png";
import igIcon from "../assets/ig-icon.png";
import githubIcon from "../assets/github-icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={twitterIcon} alt="Twitter icon" />
      <img src={fbIcon} alt="Facebook icon" />
      <img src={igIcon} alt="Instagram icon" />
      <img src={githubIcon} alt="Github icon" />
    </footer>
  );
}
