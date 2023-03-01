import "./footer.css";
import logo from "../../assets/images/logo.png";
import india from "../../assets/images/india.png";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper mb-48">
          <div className="">
            <img src={logo} alt="dukaan logo" />
          </div>
          <ul className="footer-list">
            <div className="footer-list-item">Contact</div>
            <div className="footer-list-item">FAQ's</div>
          </ul>

          <ul className="footer-list">
            <div className="footer-list-item">Tutorials</div>
            <div className="footer-list-item">Blog</div>
          </ul>

          <ul className="footer-list">
            <div className="footer-list-item">Privacy</div>
            <div className="footer-list-item">Banned Items</div>
          </ul>

          <ul className="footer-list">
            <div className="footer-list-item">About</div>
            <div className="footer-list-item ">
              Jobs
              <div className="counter">3</div>
            </div>
          </ul>

          <ul className="footer-list">
            <div className="footer-list-item">Facebook</div>
            <div className="footer-list-item">Twitter </div>
            <div className="footer-list-item">Linkedin</div>
          </ul>
        </div>
        <div className="footer-divder mb-24"></div>
        <div className="flex space-between ">
          <div className="footer-heading">
            Dukaan 2020, All rights reserved.
          </div>
          <div className="footer-heading flex-center gap-8">
            Made in
            <img src={india} alt="indian flag" />
          </div>
        </div>
      </div>
    </>
  );
};
