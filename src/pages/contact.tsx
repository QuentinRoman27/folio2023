import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container flex flex-col items-center justify-center mt-10 p-3"
    >
      <h1 className="text-center flex flex-wrap">
        Interested in a collaboration or learning more?
      </h1>
      <h2 className="my-4">Reach out!</h2>
      <a href="mailto:cloe.furlan@yahoo.fr" className="my-3">
        cloe.furlan@yahoo.fr
      </a>
      <div className="icons">
        <Link href="https://www.linkedin.com/in/cloe-f/">
          <i className={"fab fa-linkedin"}></i>
        </Link>
        <Link href="https://github.com/cloecloe">
          <i className={"fab fa-github-square"}></i>
        </Link>
      </div>
    </section>
  );
}
