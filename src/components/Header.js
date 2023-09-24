import logoImage from "../../images/logo.jpg"; //for importing any image dont miss the starting "./" else jsx will not be able to read
import {useState} from "react";

export const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="Heading-container">
      <img className="logo" src={logoImage} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
