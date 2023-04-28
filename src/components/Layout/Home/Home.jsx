import moment from "moment/moment";
import React from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
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
  );
};

export default Home;
