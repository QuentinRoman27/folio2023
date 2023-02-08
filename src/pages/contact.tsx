import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <a href="mailto:quentinroman27@gmail.com" className="my-3">
        cloe.furlan@yahoo.fr
      </a>
      <div className="icons">
        <Link href="https://www.linkedin.com/in/quentin-roman-67a35223b/">
          <i>Linkedin</i>
        </Link>
        <Link href="https://github.com/QuentinRoman27">
          <i>Github</i>
        </Link>
      </div>
    </section>
  );
}
