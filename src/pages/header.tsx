import React from "react";
import Button from "@/components/button";
import Navbar from "@/components/navbar";

export default function Header() {
  return (
    <div id="header">
      <Navbar />

      <div id="banner">
        <div className="content container py-40 flex flex-col items-center md:items-start">
          <h3>Hi, I am Cloé</h3>
          <h1 className="mb-10 mt-2 md:max-w-2xl text-center md:text-left">
            From recruiter, to web developer
          </h1>
          <Button textContent="Discover my profile" link="#about" />
        </div>
        {/* <div className="geometric-elements flex">
          <img
            className="geometric-element" id="element-1"
            src="../images/triangle/red@0.5x.png"
            alt="circle"
          />
          <img
            className="geometric-element"
            src="../images/triangle/purple.png"
            alt="circle"
          />
          <img
          className="geometric-element"
          src="../images/triangle/blue@0.5x.png"
          alt="circle"
          />
          <img
          className="geometric-element"
          src="../images/triangle/purple@0.5x.png"
          alt="circle"
          />
          <img
            className="geometric-element"
            src="../images/triangle/red@0.5x.png"
            alt="circle"
          />
          <img
            className="geometric-element"
            src="../images/triangle/purple.png"
            alt="circle"
          />
        </div> */}
      </div>
    </div>
  );
}
