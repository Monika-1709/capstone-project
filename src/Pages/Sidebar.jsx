import React, { useState } from "react";
import { FaTh, FaCommentDots, FaListAlt, FaBars } from "react-icons/fa";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { NavLink } from "react-router-dom";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Outlet } from "react-router-dom";
import logo from "../Image/logo.jpg";
import "../Style/Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/conversations",
      name: "Conversations",
      icon: <FaCommentDots />,
    },
    {
      path: "/orderhistory",
      name: "Orders",
      icon: <FaListAlt />,
    },
    {
      path: "/transactions",
      name: "Transactions",
      icon: <MonetizationOnIcon />,
    },
    {
      path: "/reviews",
      name: "Reviews",
      icon: <RateReviewIcon />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "242px" : "60px" }} className="sidebar">
        <div className="top_section">
          <img
            src={logo}
            style={{ display: isOpen ? "block" : "none", width: "10vw" }}
            className="logo"
            alt="iamage"
          />

          {isOpen ? (
            <div>
              <ArrowBackIosNewIcon
                onClick={toggle}
                style={{
                  color: "white",
                  marginLeft: "1rem",
                  marginTop: "0.5rem",
                }}
              />
            </div>
          ) : (
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          )}
        </div>
        <div className="sidebar__child">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Sidebar;
