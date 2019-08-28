import React from "react";

// styles
import "./MenuItem.styles.scss";

export const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`} style={{
      backgroundImage:`url(${imageUrl})`
  }}>
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>
);
