import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const routes = [
    { path: "/", name: "Home", element: <Home />, end: true },
    { path: "/about", name: "About", element: <About /> },
    { path: "/contact", name: "Contact", element: <Contact /> },
];

export default routes;