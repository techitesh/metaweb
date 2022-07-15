import Head from "next/head";
import { Fragment } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fragment>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Fragment>
    </>
  );
}

export default MyApp;
