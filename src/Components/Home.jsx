import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "/src/Parts/Header";
import Navbar from "/src/Parts/Navbar";
import Footer from "../Parts/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Footer />
    </>
  );
};

export default Home;
