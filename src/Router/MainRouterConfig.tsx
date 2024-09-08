import { RouteObject } from "react-router-dom";
import { MAIN_ROUTES } from "../Common/Constants/Routes";
import MainContainer from "../Common/Components/MainContainer/MainContainer";

export const MAIN_ROUTER_CONFIG: RouteObject[] = [

    {
        path: MAIN_ROUTES.ROOT,
        element: <MainContainer />,
        errorElement: <>404</>,
        children: [
            {
                path: MAIN_ROUTES.HOME,
                element: <></>,

            },
            {
                path: MAIN_ROUTES.HOME,
                element: <></>,

            }, {
                path: MAIN_ROUTES.HOME,
                element: <></>,

            },
        ]
    }
]