import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Hero />
      <Categories />
      <QuickLinks />
      <Footer />
    </>
  );
}
