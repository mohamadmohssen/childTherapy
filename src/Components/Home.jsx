import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "/src/Parts/Header";
import Navbar from "/src/Parts/Navbar";
import BarAutoIncrement from "../Parts/BarAutoIncrement";
import Footer from "../Parts/Footer";
import Testimonial from "../Parts/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Testimonial />
      <BarAutoIncrement />
      <Navbar />
      <Footer />
    </>
  );
};

export default Home;
