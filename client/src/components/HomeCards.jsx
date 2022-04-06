import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./homeCards.scss";

const HomeCards = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <section
          className={`hero-card hero-card_${item.id} font-link`}
          id={`${item.id === 2 ? "scrolled" : ""}`}
          key={item.id}
        >
          <div className="hero-card_description">
            <h1>{item.car_model}</h1>
            <div>
              <span>{item.car_description}</span>
              <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
                <span className="link-description">
                  {item.id < 5 ? "Touchless Delivery" : ""}
                </span>
              </a>
            </div>
          </div>

          <a href="#scrolled">
            <span role="button" className="chevron-down animate-chevron_bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="chevron-down"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </a>
          {/* {data.type === "solar"
            ? data.map((item) => (
                <div className="hero-card_description">
                  <h1>{item.car_model}</h1>
                  <p>Order Online for Touchless Delivery</p>
                </div>
              ))
            : ""} */}
        </section>
      ))}
      ;
    </div>
  );
};

export default HomeCards;
