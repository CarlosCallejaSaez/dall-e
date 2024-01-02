import React from 'react';
import { FaLinkedin, FaGithub ,FaHeart} from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <p>Developed with <FaHeart style={{ color: 'red' }} /> by Carlos Calleja</p>
      <div>
        <a href="https://www.linkedin.com/in/carlos-calleja-saez-8177792a0/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/CarlosCallejaSaez" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;