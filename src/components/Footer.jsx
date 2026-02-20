import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="py-8 min-h-[250px] bg-black/25">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
                <div id="left-col" className="flex-2">
                    Elijah Blackbird
                </div>
                <div id="right-col" className="flex flex-1 flex-col">
                    <h2 className="text-2xl font-bold">Contact</h2>
                    <NavLink 
                        to='/contact'
                        className="text-blue-600 hover:text-indigo-900 transition-colors duration-200">
                        Contact Me
                    </NavLink>
                    <a 
                            href="https://www.linkedin.com/in/elijah-blackbird-he-him-390374206/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-indigo-900 transition-colors duration-200"
                        >LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}