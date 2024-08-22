import HomePage from "@/layout/Home";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
