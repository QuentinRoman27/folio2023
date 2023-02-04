import React from "react";
import Header from "./header";
import About from "./about";
import Technologies from "./technologies";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import "../styles/pages/header.css";

export default function Home() {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>Cloe's portfolio</title>
        <link rel="icon" href="../images/logocloe.png" type="image/png" />
        <meta property="og:image" content="../images/logocloe.png" />
        <meta
          name="description"
          content="From recruiter to web developer. Get in touch to discuss projects"
        />
        <meta property="og:title" content="Cloe's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="#" />
        <meta
          property="og:description"
          content="From recruiter to web developer. Get in touch to discuss projects"
        />
        <meta name="twitter:title" content="Cloe's portfolio" />
        <meta
          name="twitter:description"
          content="Former recruiter, now web developer"
        />
        <meta name="twitter:image" content="../images/logocloe.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;600;700&family=Work+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/b0cb6db527.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <main>
        <Header />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
