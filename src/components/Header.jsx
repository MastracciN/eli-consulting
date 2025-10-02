import { NavLink } from "react-router-dom";
import routes from "../routesConfig";

export default function Header() {

    return (
        <nav className="p-4 flex items-center justify-between max-w-[1200px] mx-auto">
            {/* <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center"> */}
              {/* <nav className={`inline-flex items-center space-x-10 rounded-xl transition-all duration-300 ${scrolled ? "bg-white shadow-md px-8 py-4" : "bg-transparent px-8 py-4"}`}> */}
            {/* <nav className={`inline-flex items-center space-x-10 rounded-xl transition-all duration-300`}> */}
            <h1>Elijah Blackbird</h1>
            <div className="space-x-4">
                {routes.map(({ path, name, end }) => (
                    <NavLink key={path} to={path} end={end}
                        className={({ isActive }) => 
                            isActive ? "underline" : "hover:underline"}>
                        {name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
{/* <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 py-4">Resume</a></li> */}