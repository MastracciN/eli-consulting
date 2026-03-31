import { NavLink } from "react-router-dom";
import logo from "../assets/blackbird-header-dark.png";

export default function Footer() {

    return (
        <footer className="py-16 min-h-[250px] bg-text text-white">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row">
                <div className="flex-2">
                    <h2 className="sr-only">Blackbird Bimaadiziwin Consulting</h2>
                    <img
                        src={logo}
                        alt="Blackbird Bimaadiziwin Consulting"
                        className="h-12 w-auto md:h-18"
                    />
                </div>

                <div className="flex flex-1 flex-col space-y-1">
                    <h2 className="text-2xl font-serif mb-6">Info</h2>
                    <NavLink 
                        to='/home'
                        className="relative inline-block w-fit
                            after:absolute after:left-0 after:bottom-[1px]
                            after:h-[1px] after:w-full
                            after:origin-left
                            after:scale-x-0
                            after:bg-current
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100">
                        Home
                    </NavLink>
                    <NavLink 
                        to='/about'
                        className="relative inline-block w-fit
                            after:absolute after:left-0 after:bottom-[1px]
                            after:h-[1px] after:w-full
                            after:origin-left
                            after:scale-x-0
                            after:bg-current
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100">
                        About
                    </NavLink>
                    <NavLink 
                        to='/services'
                        className="relative inline-block w-fit
                            after:absolute after:left-0 after:bottom-[1px]
                            after:h-[1px] after:w-full
                            after:origin-left
                            after:scale-x-0
                            after:bg-current
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100">
                        Services
                    </NavLink>
                </div>

                <div className="flex flex-1 flex-col items-start space-y-1">
                    <h2 className="text-2xl font-serif font-medium mb-6">Contact</h2>
                    <NavLink 
                        to='/contact'
                        className="relative inline-block
                            after:absolute after:left-0 after:bottom-[1px]
                            after:h-[1px] after:w-full
                            after:origin-left
                            after:scale-x-0
                            after:bg-current
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100">
                        Contact
                    </NavLink>
                    <a 
                        href="https://www.linkedin.com/in/elijah-blackbird-he-him-390374206/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block
                            after:absolute after:left-0 after:bottom-[1px]
                            after:h-[1px] after:w-full
                            after:origin-left
                            after:scale-x-0
                            after:bg-current
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}