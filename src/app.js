import React, {Suspense, lazy, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import ResMenu from "./components/ResMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {useState} from "react";
// import Grocery from "./components/Grocery";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

// lazy Loading / On demand loading / chunking / code split
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Cart = lazy(() => import("./components/Cart"));

const AppLayout = () => {
  //Authentication code
  const [userName, setUserName] = useState("Dummy User");

  useEffect(() => {
    const data = {
      name: "Abhishek",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedinUser: userName, setUserName}}>
        <div className="bg-green-200 h-full">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....Please Wait</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading your cart please wait</h1>}>
            <Cart />
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
