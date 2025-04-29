import { createBrowserRouter } from "react-router-dom"
import Like from "../like/like";
import Shop from "../Shop/shop";

 export const router = createBrowserRouter([
    {
        path: "/",
        element : <PrivateRouter/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
        ],
    },
    {
        path: "/like",
        element: <Like/>,
    },
    {
        path: "/shop",
        element: <Shop/>,
    },
 ])