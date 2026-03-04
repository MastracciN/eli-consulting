import { NavLink, useLocation } from "react-router-dom";
import routes from "../routesConfig";

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
        <nav className="text-white bg-black">
            <div className="p-8 flex items-center justify-between max-w-[1400px] mx-auto">
                <NavLink to="/" className="inline-block">
                    <h1 className="font-semibold">Elijah Blackbird</h1>
                </NavLink>
                <div className="flex space-x-6">
                    {routes.map(({ path, name, end }) => (
                        <NavLink 
                            key={path} 
                            to={path} 
                            end={end}
                            className={({ isActive }) =>
                                `relative inline-block pb-1
                                after:absolute after:left-0 after:bottom-0
                                after:h-[1px] after:bg-blue-600
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