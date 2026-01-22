import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const routes = [
    { path: "/", name: "Home", element: <Home />, end: true },
    { path: "/about", name: "About", element: <About /> },
    { path: "/services", name: "Services", element: <Services /> },
    { path: "/contact", name: "Contact", element: <Contact /> },
];

export default routes;