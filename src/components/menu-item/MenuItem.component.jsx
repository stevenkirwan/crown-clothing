import React from "react";

// styles
import "./MenuItem.styles.scss";

export const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
  <div className="background-image" style={{
    backgroundImage:`url(${imageUrl})`}}></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>
);
