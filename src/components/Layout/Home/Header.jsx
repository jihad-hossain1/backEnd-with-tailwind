import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between mx-10 py-2">
      <div>
        <h3>Tailwind BackEnd</h3>
      </div>
      <div>
        <ul className="flex space-x-6">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Product</Link>
          </li>
          <li>
            <Link>LogIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
