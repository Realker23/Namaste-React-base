import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "./images/logo.jpg"; //for importing any image dont miss the starting "./" else jsx will not be able to read

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

const Header = () => (
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

const resList = [
  {
    info: {
      id: "375041",
      name: "Andhra Gunpowder",
      cloudinaryImageId: "byilgyrcfz690ryoasww",
      locality: "6th Block",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Andhra", "Biryani", "South Indian"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "375041",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "10496",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 01:00:00",
        opened: true,
      },

      isOpen: true,
      type: "F",
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "255801",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "0da26e86f4490626665f0b1d8810906e",
      locality: "6th Block",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets",
      ],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "255801",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "319582",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-12 23:59:00",
        opened: true,
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "392828",
      name: "Big Bowl",
      cloudinaryImageId: "992f217c2f122c0d8fc385855ca30722",
      locality: "Chikka Lakshmaiah Layout",
      areaName: "Adugodi",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "392828",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "434792",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-13 03:00:00",
        opened: true,
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "25620",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Intermediate Ring Road",
      areaName: "Ejipura",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "25620",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-12 23:00:00",
        opened: true,
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "171768",
      name: "Mumbai Tiffin",
      cloudinaryImageId: "h58dwaoafbqj0ax5h26b",
      locality: "HSR Layout",
      areaName: "HSR Layout",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Home Food", "Thalis"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "171768",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "13235",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-12 16:00:00",
        opened: true,
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "201224",
      name: "Asha tiffins",
      cloudinaryImageId: "n15vckntsiboiod3gpco",
      locality: "7th Sector",
      areaName: "Hsr Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "South Indian", "Beverages"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "201224",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "236243",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-12 15:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
];

const ResCard = (props) => {
  const { resdata } = props;
  // refactor our code
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resdata.info;
  return (
    <div className="resCard">
      {/* <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resdata.info.cloudinaryImageId
        }
        alt="resLogo"
      />
      <h2>{resdata.info.name}</h2>
      <p>{resdata.info.cuisines.slice(0, 3).join(", ")}</p>
      <p>{resdata.info.avgRating} stars</p>
      <p> {resdata.info.sla.slaString} </p> */}
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="resLogo"
      />
      <h2>{name}</h2>
      <p>{cuisines.slice(0, 3).join(", ")}</p>
      <p>{avgRating} stars</p>
      <p> {sla.slaString} </p>
    </div>
  );
};

const Body = () => (
  <div className="body-container">
    <div className="searchBox">
      <input
        className="input"
        type="text"
        placeholder="search for restraunt, cuisine and dishes"
      ></input>
      <button className="btnSearch">Search</button>
    </div>
    <div className="resContainer">
      {/* <ResCard resdata={resList[0]} />
      <ResCard resdata={resList[1]} />
      <ResCard resdata={resList[2]} />
      <ResCard resdata={resList[3]} />
      <ResCard resdata={resList[4]} />
      <ResCard resdata={resList[5]} />
      <ResCard resdata={resList[6]} /> */}
      {resList.map((restaurant, i) => (
        <ResCard key={i} resdata={restaurant} />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
