import logo from "../assets/spcLogo.png"
import { FaInstagram, FaLinkedin,FaTwitter, FaGithub } from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-2" width={80} height={50} alt="Logo"/>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/stevenmpachecocores"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
            <FaLinkedin/>
        </a>
         <a href="github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
            <FaGithub/>
        </a>
         <a href="instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
            <FaInstagram/>
        </a>
         <a href="twitter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter">
            <FaTwitter/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar