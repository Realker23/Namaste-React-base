import logoImage from "../../images/logo.jpg"; //for importing any image dont miss the starting "./" else jsx will not be able to read
import {useState} from "react";
import {Link} from "react-router-dom";

export const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="Heading-container">
      <img className="logo" src={logoImage} />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="loginButton"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
