import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="py-8 min-h-[250px] bg-black text-white">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
                <div id="left-col" className="flex-2">
                    Elijah Blackbird
                </div>
                <div id="right-col" className="flex flex-1 flex-col items-start">
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>
                    <NavLink 
                        to='/contact'
                        className="relative inline-block pb-1
                            after:absolute after:left-0 after:bottom-0
                            after:h-[1px] after:w-full
                            after:origin-left
                            after:scale-x-0
                            after:bg-current
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100">
                        Contact Me
                    </NavLink>
                    <a 
                            href="https://www.linkedin.com/in/elijah-blackbird-he-him-390374206/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block pb-1
                                after:absolute after:left-0 after:bottom-0
                                after:h-[1px] after:w-full
                                after:origin-left
                                after:scale-x-0
                                after:bg-current
                                after:transition-transform after:duration-300
                                hover:after:scale-x-100"
                        >LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}