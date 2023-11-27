import { createBrowserRouter } from "react-router-dom";
import { loginRouter } from "./login";
import { HomeRouter, homeMenu } from "./home";

const router = createBrowserRouter([loginRouter, HomeRouter]);
const menu = homeMenu;
console.log(menu);
export { router, menu };
