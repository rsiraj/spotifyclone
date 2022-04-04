import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <nav>
        <p>Tesla © 2022</p>
        <Link>Privacy & Legal</Link>
        <Link>Vehicle Recalls</Link>
        <Link>Contact</Link>
        <Link>Careers</Link>
        <Link>News</Link>
        <Link>Engage</Link>
        <Link>Location</Link>
      </nav>
    </div>
  );
};

export default Footer;
