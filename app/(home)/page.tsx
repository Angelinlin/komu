import Hero from "@/components/main/Hero";
import ContactUs from "@/components/sub/ContactUs";
import About from "@/components/main/About";
import Gallery from "@/components/main/Gallery";
import Footer from "@/components/main/Footer";
import FaQs from "@/components/main/FaQs";
import Navbar from "@/components/main/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col gap-15">
          <Hero />
          <About />
          <Gallery />
          <FaQs />
          <ContactUs />
          {/* <MapSection /> */}
          <Footer />
        </div>
        {/* <UserButton afterSignOutUrl="/" /> */}
      </main>
    </>
  );
}
