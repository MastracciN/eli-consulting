import { NavLink, useLocation } from "react-router-dom";
import routes from "../routesConfig";

export default function Header() {
    const { pathName } = useLocation();
    const isHome = pathName === "/";

    return (
        // <nav className={`py-6 text-center ${
        //     isHome ? "bg-transparent text-white" : "bg-gray-100 text-black"
        // }`}>
        <nav className="p-4 pt-8 flex items-center space-x-12 max-w-[1200px] mx-auto">
            <h1>Elijah Blackbird</h1>
            <div className="space-x-6">
                {routes.map(({ path, name, end }) => (
                    <NavLink 
                        key={path} 
                        to={path} 
                        end={end}
                        className={({ isActive }) =>
                            `pb-4 border-b-3 ${
                                isActive
                                ? "border-black"
                                : "border-transparent hover:border-black"
                            }`
                        }
                    >
                        {name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
{/* <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 py-4">Resume</a></li> */}