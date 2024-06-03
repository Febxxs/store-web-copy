import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>
            lorem ipsum dolar ismet blabal dan masih bnayak lagi kata kata yang
            tidakbisa di katakan{" "}
          </p>
          <div className="footer-content-icons">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>Abote us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+23-1323-23-21321</li>
            <li>contact@contact.mail</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 @febxs</p>
    </div>
  );
};

export default Footer;
