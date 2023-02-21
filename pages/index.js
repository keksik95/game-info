import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Game info</title>
        <meta name="description" content="Game reviews" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">here goes home page</div>
      <Footer />
    </>
  );
}
