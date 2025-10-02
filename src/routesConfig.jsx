import Home from "./pages/Home";
import About from "./pages/About";

const routes = [
    { path: "/", name: "Home", element: <Home />, end: true },
    { path: "/about", name: "About", element: <About /> },
];

export default routes;