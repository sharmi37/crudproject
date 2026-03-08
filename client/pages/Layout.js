import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';  // <-- Bootstrap Icons

export default function Layout() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg text-white" style={{ backgroundColor: "green" }}>
          <div className="container-fluid">
            
            {/* Brand Icon */}
            <Link className="navbar-brand text-white" to="/">
              <i className="bi bi-shop"></i> Silks
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    <i className="bi bi-house-door-fill"></i> Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    <i className="bi bi-envelope-fill"></i> Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/shippingdelivery">
                    <i className="bi bi-truck"></i> Shipping
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/returnorder">
                    <i className="bi bi-arrow-counterclockwise"></i> Returns
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    <i className="bi bi-info-circle-fill"></i> About
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
