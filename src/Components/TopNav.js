import React from "react";
import talent from "../assets/icons/talent.png";
import FINPLOY from "../assets/icons/FINPLOY.png";
import job from "../assets/icons/job.png";
import messanger from "../assets/icons/messanger.png";
import phone from "../assets/icons/phone.png";
import arrow from "../assets/icons/arrow.png";
import user from "../assets/icons/user.png";
import user2 from "../assets/icons/user2.png";
import logo from "../assets/icons/logo.png";
import shopping from '../assets/icons/shopping.png';
import "./TopNav.css";
import { useNavigate } from 'react-router-dom'

const TopNav = () => {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: "100%" }}>
      <div className="top">
        <div>
          <img
            src={logo}
            alt="logo"
            style={{ width: "8%", marginTop: "-14px", marginLeft: "30px" }}
          />
        </div>
        <div>
          <p className="my-job" onClick={() => navigate('/')}>Home</p>
        </div>
        <div>
          <p className="my-talent" onClick={() => navigate('/shop')}>Shop</p>
        </div>
        <div>
          <p className="messenger" onClick={() => navigate('/favorite')}>Favorites</p>
        </div>
        <div>
          <p className="order" onClick={() => navigate('/order')}>Order</p>
        </div>
        <div>
          <p className="contact" onClick={() => navigate('/contact')}>Contact</p>
        </div>
        <p className="pro-name">Profile</p>
        <img src={shopping} alt="arrow" className="shopping" />
      </div>
    </div>
  );
};

export default TopNav;
