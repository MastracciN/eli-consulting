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
        <nav className="text-black">
            <div className="p-8 flex items-center space-x-12 max-w-[1200px] mx-auto">
                <h1 className="font-semibold">Elijah Blackbird</h1>
                <div className="space-x-6">
                    {routes.map(({ path, name, end }) => (
                        <NavLink 
                            key={path} 
                            to={path} 
                            end={end}
                            className={({ isActive }) =>
                                `pb-1 border-b-2 ${
                                    isActive
                                    ? "border-blue-500"
                                    : `border-transparent relative inline-block 
                                       after:absolute after:left-0 after:bottom-0 
                                       after:h-[2px] after:w-0 after:bg-blue-600 
                                       after:transition-all after:duration-300 hover:after:w-full`
                                }`
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