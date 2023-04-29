/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import LeftNav from "../pages/LeftNav/LeftNav";
import RightNav from "../pages/RightNav/RightNav";
import Footer from "../pages/Footer";


const Main = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-3 grid-flow-row-dense">
     
      <div className="bg-green-500 min-h-[50px] col-span-3">
        <Header></Header>
      </div>
      <div className="bg-cyan-400 min-h-[50px]">
        <LeftNav></LeftNav>
      </div>
      <div className="bg-yellow-400 min-h-[50px]">
        <Outlet></Outlet>
      </div>
      <div className="bg-cyan-400 min-h-[50px]">
        <RightNav></RightNav>
      </div>
      <div className="bg-red-400 min-h-[50px] col-span-3">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
