import Navbar from "./NavBar";
import MenuSection from "./MenuSection";
import MenuNewsPopup from "./MenuNewsPopup";


export default function Home() {
  return (
    <>


    <main className="min-h-screen bg-[#d1af95] flex flex-col items-center pb-16">
      <Navbar />
      <div className="w-full max-w-screen-xl">
        <MenuSection />
      </div>

      <MenuNewsPopup />
    </main>
    </>
  );
}

