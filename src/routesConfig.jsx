import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const routes = [
    { path: "/", name: "Home", element: <Home />, end: true, title: 'Blackbird Biimadiziwin Consulting' },
    { path: "about", name: "About", element: <About />, title: 'About | Blackbird Biimadiziwin Consulting' },
    { path: "services", name: "Services", element: <Services />, title: 'Services | Blackbird Biimadiziwin Consulting' },
    { path: "contact", name: "Contact", element: <Contact />, title: 'Contact | Blackbird Biimadiziwin Consulting' },
];

export default routes;