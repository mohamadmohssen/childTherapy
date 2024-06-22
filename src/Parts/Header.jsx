import "../css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaShield } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AttachedCards from "./AttachedCards";
const Header = () => {
  return (
    <div>
      <div className="bgimg">
        <section className="banner mt-5" style={{ padding: 0 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-xl-7">
                <div className="block">
                  <div className="divider mb-3"></div>

                  <span className="text-uppercase text-sm letter-spacing "></span>
                  <h1 className="mb-3 mt-3">Welcome to RAISE </h1>

                  <p className="mb-4 pr-5">
                    Your Partner for Diagnosing, Evaluating, and Following Up on
                    Speech and Language Pathologies.
                  </p>
                  <div className="btn-container ">
                    <Link
                      to="/aboutus"
                      className="btn btn-main-2 btn-icon btn-round-full"
                    >
                      Discover more about us <FaShield />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AttachedCards />
    </div>
  );
};

export default Header;
