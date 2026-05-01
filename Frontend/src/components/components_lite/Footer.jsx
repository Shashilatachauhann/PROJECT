import React from 'react'
import { Link } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import TermsofService from './TermsofService';

const Footer = () => {
  return (
    <div>
          <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <p>© 2026 Sunfire Sensei. All rights reserved.</p>
        <p>
          Powered by <a href="https://github.com/yourgithubusername">Shashilata Chauhan</a>
        </p>
        <p>

          <Link to={"/PrivacyPolicy"}>Privacy Policy </Link> |
          <Link to={"/TermsofService"}> Terms of Service</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;