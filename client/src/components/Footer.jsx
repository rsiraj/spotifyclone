import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-links">Tesla © 2022</p>
      <Link className="footer-links" to="">
        Privacy & Legal
      </Link>
      <Link className="footer-links" to="">
        Vehicle Recalls
      </Link>
      <Link className="footer-links" to="">
        Contact
      </Link>
      <Link className="footer-links" to="">
        Careers
      </Link>
      <Link className="footer-links" to="">
        News
      </Link>
      <Link className="footer-links" to="">
        Engage
      </Link>
      <Link className="footer-links" to="">
        Location
      </Link>
    </div>
  );
};

export default Footer;
