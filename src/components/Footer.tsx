import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footer-container">
      <div className="footer-company">
        <div className="footer-company-socialmedia">
          <div className="brand">Porto</div>
          <div>
            <span>porto@domain.com</span>
          </div>
          <div>
            <span>800-123-4567</span>
          </div>
          <div className="icons">
            <span className="footer-icon">
              {" "}
              <FontAwesomeIcon
                icon={faFacebook}
                // style={{ color: "#4267B2", fontSize: "2rem" }}
              />
            </span>

            <span className="footer-icon">
              <FontAwesomeIcon
                icon={faTwitter}
                // style={{ color: "#1DA1F2", fontSize: "2rem" }}
              />
            </span>

            <span className="footer-icon">
              <FontAwesomeIcon
                icon={faInstagram}
                // style={{ color: "#E4405F", fontSize: "2rem" }}
              />
            </span>
            <span className="footer-icon">
              <FontAwesomeIcon
                icon={faLinkedin}
                // style={{ color: "#0A66C2", fontSize: "2rem" }}
              />
            </span>
          </div>
        </div>

        <div className="footer-company-links">
          <div className="footer-company-details">
            <div className="company-list">
              <h2>Company</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
              </ul>
            </div>

            <div className="solutions">
              <h2>Solutions</h2>
              <ul>
                <li>Brand Development</li>
                <li>Graphic Design</li>
                <li>UX Design</li>
              </ul>
            </div>

            <div className="resources">
              <h2>Resources</h2>
              <ul>
                <li>Terms</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="footer-blogs">
            <h3>Blog</h3>
            <ul>
              <li>
                <span className="blog-bg">Web Design</span>
              </li>
              <li>
                <span className="blog-bg">CMS</span>
              </li>
              <li>
                <span className="blog-bg">SEO</span>
              </li>
              <li>
                <span className="blog-bg">User Experience (UX) Design</span>
              </li>
              <li>
                <span className="blog-bg">Social Media Marketing</span>
              </li>
              <li>
                <span className="blog-bg">Website Development</span>
              </li>
              <li>
                <span className="blog-bg">E-commerce strategies</span>
              </li>
              <li>
                <span className="blog-bg">Mobile Applications</span>
              </li>
              <li>
                <span className="blog-bg">Website Maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div>Porto@2024. All Rights Reserved</div>
        <div className="policy">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
