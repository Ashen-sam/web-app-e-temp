import { RouteObject } from "react-router-dom";
import { MAIN_ROUTES } from "../Common/Constants/Routes";
import MainContainer from "../Common/Components/MainContainer/MainContainer";
import Wishlist from "../Common/Components/Wishlist/Wishlist";
import HomePage from "../Containers/HomePage/HomePage";

export const MAIN_ROUTER_CONFIG: RouteObject[] = [
  {
    path: MAIN_ROUTES.ROOT,
    element: <MainContainer />,
    errorElement: <>404</>,
    children: [
      {
        path: MAIN_ROUTES.HOME,
        element: <HomePage />,
      },
      //   {
      //     path: MAIN_ROUTES.HOME,
      //     element: <></>,
      //   },
      {
        path: MAIN_ROUTES.WISHLIST,
        element: <Wishlist />,
      },
    ],
  },
];
