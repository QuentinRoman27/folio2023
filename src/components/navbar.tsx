import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <section id="navbar" className="fixed bg-white w-full z-10 opacity-75">
      <div className="container flex justify-center sm:justify-between items-center py-2">
        <Link href={"#header"}>
          <button className="my-1 hidden sm:flex sm:items-center">
            <img src="../images/logocloe.png" alt="logo Cloe" />
          </button>
        </Link>

        <div className="right-content hidden sm:flex">
          <Link href={"#about"}>
            <button className="px-4 py-2 flex items-center">About</button>
          </Link>
          <Link href={"#technologies"}>
            <button className="px-4 py-2 flex items-center">
              Technologies
            </button>
          </Link>
          <Link href={"#projects"}>
            <button className="px-4 py-2 flex items-center">Projects</button>
          </Link>
          <Link href={"#contact"}>
            <button className="px-4 py-2 flex items-center">Contact</button>
          </Link>
        </div>
        <div className="right-content flex sm:hidden">
          <a className="px-4 py-2 flex items-center" href={"#about"}>
            About
          </a>
          <a className="px-4 py-2 flex items-center" href={"#technologies"}>
            Technologies
          </a>
          <a className="px-4 py-2 flex items-center" href={"#projects"}>
            Projects
          </a>
          <a className="ml-1 contact" href={"#contact"}>
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
