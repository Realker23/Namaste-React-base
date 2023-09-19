import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import Body from "./components/Body";

/*
Header
  -Logo
  -NavItem
Body
  -Search
  -Restruant Container
    -Restruant card
Footer
  -Copyright
  -Links
*/

const AppLayout = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
