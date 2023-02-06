import type { AppProps } from "next/app";

import "@/styles/project.css";
import "@/styles/about.css";
import "@/styles/button.css";
import "@/styles/contact.css";
import "@/styles/header.css";
import "@/styles/navbar.css";
import "@/styles/style.css";
import "@/styles/technologies.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
