import Navbar from "./NavBar";
import MenuSection from "./MenuSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
        <title>La Isla Beer Club</title>
      </Head>

    <main className="min-h-screen bg-[#d1af95] flex flex-col items-center pb-16">
      <Navbar />
      <div className="w-full max-w-screen-xl">
        <MenuSection />
      </div>
    </main>
    </>
  );
}

