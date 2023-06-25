import {createBrowserRouter} from "react-router-dom";
import Home from "../components/home/Home";

createBrowserRouter([
    {path: "/", element: <Home />},
    // todo add more pages
    {path: "/reviews", element: <Home />},
])