import logoImage from "../../images/logo.jpg"; //for importing any image dont miss the starting "./" else jsx will not be able to read
import {useState} from "react";
import {Link} from "react-router-dom";

export const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="flex justify-between p-4 bg-white shadow-lg shadow-gray-600 mb-4">
      <img className="w-40 h-40" src={logoImage} />
      <div className="flex items-center">
        <ul className="flex ">
          <li className="mx-4 text-lg font-semibold p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-4 text-lg font-semibold p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-4 text-lg font-semibold p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-4 text-lg font-semibold p-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-4 text-lg font-semibold p-2">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="loginButton mx-4 text-lg font-semibold bg-green-500 py-2 px-4 rounded-lg hover:bg-green-600 hover:scale-105"
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
