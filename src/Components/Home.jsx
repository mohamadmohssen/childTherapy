import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "/src/Parts/Header";
import Navbar from "/src/Parts/Navbar";
import BarAutoIncrement from "../Parts/BarAutoIncrement";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BarAutoIncrement />
    </>
  );
};

export default Home;
