import Navbar from "../components/Home/Navbar";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import QuickLinks from "../components/Home/QuickLinks";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Categories />
      <QuickLinks />
      <Footer />
    </>
  );
}
