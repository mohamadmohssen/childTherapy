import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaShield } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header from "/src/Parts/Header";
const Navbar = () => {
  return (
    <div>
      <Header />
      <div className="bgimg">
        <section className="banner mt-5" style={{ padding: 0 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xl-7">
                <div className="block">
                  <div className="divider mb-3"></div>

                  <span className="text-uppercase text-sm letter-spacing ">
                    Total Health care solution
                  </span>
                  <h1 className="mb-3 mt-3">
                    Your most trusted health partner
                  </h1>

                  <p className="mb-4 pr-5">
                    A repudiandae ipsam labore ipsa voluptatum quidem quae
                    laudantium quisquam aperiam maiores sunt fugit, deserunt rem
                    suscipit placeat.
                  </p>
                  <div className="btn-container ">
                    <Link
                      to="/content"
                      className="btn btn-main-2 btn-icon btn-round-full"
                    >
                      Make appointment <FaShield />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
