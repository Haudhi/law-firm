import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <i className="fas fa-skull-crossbones"></i> Kesuma
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-links">
              About
            </Link>
          </li>

          <li>
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>

          <li>
            <Link to="/profile" className="nav-links">
              Profile
            </Link>
          </li>
          <li>
            <a className="nav-contact" href="https://wa.me/6282262324242" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
