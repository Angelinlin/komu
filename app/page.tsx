import Hero from "@/components/main/Hero";
import MapSection from "@/components/main/MapSection";
import ContactUs from "@/components/sub/ContactUs";
import About from "@/components/main/About";
import Gallery from "@/components/main/Gallery";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-15">
        <Hero />
        <About />
        <Gallery />
        <MapSection />
        <ContactUs />
        <Footer />
      </div>
      {/* <UserButton afterSignOutUrl="/" /> */}
    </main>
  );
}
