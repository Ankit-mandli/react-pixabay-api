import React from "react";
import { menuItems } from "./data";
import "./styles.css";

const Menu = ({ handleMenuItemClicked }) => (
  <nav>
    <h2 className="text-center">Some sample searches</h2>
    <ul className="tilesWrap">
      {menuItems.map(({ label, id }) => (
        // <li key={id} id={label} onClick={handleMenuItemClicked}>
        //   {label}
        // </li>
        <li key={id} id={label} onClick={handleMenuItemClicked}>
          

          
          <p>
          {label}
          </p>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
