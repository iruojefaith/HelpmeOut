import Features from "./Features";
import Howitworks from "./Howitworks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./Header";

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen'>
      <Navbar />
      <Header />
      <Features />
      <Howitworks />
      <Footer />
    </main>
  );
}
