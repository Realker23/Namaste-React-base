import logoImage from "../../images/logo.jpg"; //for importing any image dont miss the starting "./" else jsx will not be able to read

export const Header = () => (
  <div className="Heading-container">
    <img className="logo" src={logoImage} />
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
