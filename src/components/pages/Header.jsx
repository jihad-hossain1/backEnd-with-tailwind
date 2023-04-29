import React from "react";
import { Link } from "react-router-dom";
import moment from "moment/moment";
// import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (<> 
    
     <div className="py-10 px-4">
      <div className="text-center mt-4">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </div>
      <div className="flex">
        <button className="bg-cyan-200  text-red-500 font-semibold border border-cyan-200 shadow rounded px-2">
          latest
        </button>
        <Marquee className="text-cyan-700" speed={70} Gradient={200}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet
            maiores ipsam maxime eius illo voluptates tenetur? Maxime quos
            voluptate delectus quia modi voluptatibus hic sapiente? Porro
            voluptates possimus inventore.
          </p>
        </Marquee>
      </div>
    </div>

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

    </>
  );
};

export default Header;
