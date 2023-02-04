import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="container flex flex-col md:flex-row items-center justify-center md:items-start py-32"
    >
      <div className="left-content md:mr-10">
        <h1 className="mb-20">About Me</h1>
        <p>
          After a Master in Business from KEDGE BS (Bordeaux, France) and 4
          years in recruitment, mainly in the tech industry, I felt my learning
          curve was slowing down significantly. Eager to keep learning
          throughout my career, I found in web development a playground with
          infinite possibilities.
        </p>
        <br></br>
        <p>
          Newly graduated from Le Wagon, the #1 web development bootcamp in the
          world, I like to work in a challenging and creative environment to
          produce innovative tech solutions.
        </p>
        <br></br>
        <p>
          From my previous jobs I have kept my excellent customer service,
          knowing how to work under pressure and tight deadlines and being a
          team player.
        </p>
        <Link
          href={"https://www.linkedin.com/in/cloe-f/"}
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="my-12">
            Check my LinkedIn Profile
            <i className={"fas fa-external-link-alt ml-2"}></i>
          </h4>
        </Link>
      </div>
      <div className="right-content flex items-center justify-center">
        <img src="../images/avatar.jpg" alt="avatar" />
      </div>
    </div>
  );
}
