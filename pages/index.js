import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Diabetes Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <MainContent />
        {/* <Footer /> */}
      </div>
    </>
  );
}
