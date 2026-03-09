import { NavLink, useLocation } from "react-router-dom";
import routes from "../routesConfig";
import logo from "../assets/logo-header.png"

export default function Header() {
    const { pathName } = useLocation();
    const isHome = pathName === "/"
    const isAbout = pathName ==="/about"
    const isServices = pathName ==="/services"
    const isContact = pathName ==="/contact"

    return (
        // <nav className={`py-6 text-center ${
        //     isHome ? "bg-transparent text-white" : "bg-gray-100 text-black"
        // }`}>
        <nav className="bg-main text-text py-4 px-6">
            <div className=" flex items-center justify-between max-w-[1400px] mx-auto">
                <NavLink to="/" className="inline-block">
                    <h1 className="sr-only">Blackbird Bimaadiziwin Consulting</h1>
                    <img
                        src={logo}
                        alt="Blackbird Bimaadiziwin Consulting"
                        className="w-auto h-12 md:h-18"
                    />
                </NavLink>
                <div className="flex space-x-9">
                    {routes.map(({ path, name, end }) => (
                        <NavLink 
                            key={path} 
                            to={path} 
                            end={end}
                            className={({ isActive }) =>
                                `relative inline-block pb-1
                                after:absolute after:left-0 after:bottom-0
                                after:h-[2px] after:bg-dg
                                after:transition-all after:duration-300
                                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                            }
                        >
                            {name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
{/* <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 py-4">Resume</a></li> */}