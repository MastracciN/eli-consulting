import { NavLink, useLocation } from "react-router-dom";
import routes from "../routesConfig";

export default function Header() {
    const { pathName } = useLocation();
    const isHome = pathName === "/";
    const isAbout = pathName ==="/about"

    return (
        // <nav className={`py-6 text-center ${
        //     isHome ? "bg-transparent text-white" : "bg-gray-100 text-black"
        // }`}>
        <nav className="bg-g1 text-white">
            <div className="p-4 pt-8 flex items-center space-x-12 max-w-[1200px] mx-auto">
                <h1>Elijah Blackbird</h1>
                <div className="space-x-6">
                    {routes.map(({ path, name, end }) => (
                        <NavLink 
                            key={path} 
                            to={path} 
                            end={end}
                            className={({ isActive }) =>
                                `pb-3 border-b-6 ${
                                    isActive
                                    ? "border-white"
                                    : "border-transparent hover:border-white"
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