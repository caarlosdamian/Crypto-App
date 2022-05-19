import Cryptocurrencies from "../pages/Cryptocurrencies";
import CryptoDetails from "../pages/CryptoDetails";
import HomePage from "../pages/HomePage";
import News from "../pages/News";
export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  // {
  //   path: "/exchanges",
  //   component: Exchanges,
  // },
  {
    path: "/cryptocurrencies",
    component: Cryptocurrencies,
  },
  {
    path: "/crypto/:coinId",
    component: CryptoDetails,
  },
  {
    path: "/news",
    component: News,
  },
  {
    component: HomePage,
  },
];
