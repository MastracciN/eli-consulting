import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"
import routes from "../routesConfig";
import logo from "../assets/logo-header.webp";

export default function Header() {
    const { pathName } = useLocation();
    const isHome = pathName === "/"
    const isAbout = pathName ==="/about"
    const isServices = pathName ==="/services"
    const isContact = pathName ==="/contact"

    const [open, setOpen] = useState(false);

    return (
        // <nav className={`py-6 text-center ${
        //     isHome ? "bg-transparent text-white" : "bg-gray-100 text-black"
        // }`}>
        <nav className="bg-main text-text py-4 px-6 relative z-99">
            <div className=" flex items-center justify-between max-w-[1400px] mx-auto">
                <NavLink to="/" className="inline-block">
                    <h1 className="sr-only">Blackbird Bimaadiziwin Consulting</h1>
                    <img
                        src={logo}
                        alt="Logo for Blackbird Bimaadiziwin Consulting"
                        className="w-auto h-12 md:h-18"
                    />
                </NavLink>
                
                <div className="hidden md:flex space-x-8">
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

                <button
                    onClick={() => setOpen(!open)}
                    className='md:hidden text-3xl cursor-pointer'
                    aria-label="Open menu"
                    aria-expanded={open}
                >
                    <Menu size={28}/>
                </button>

                <div className={`fixed inset-0 z-[999] transition-opacity duration-300
                    ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/40" />

                    <div
                        className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg
                        transform transition-transform duration-300 ease-out
                        ${open ? 'translate-x-0' : 'translate-x-full'}`}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="flex justify-end p-4">
                            <button
                                onClick={() => setOpen(false)}
                                className="text-2xl cursor-pointer hover:opacity-70 transition"
                                aria-label="Close menu"
                                aria-expanded={open}
                            >
                                <X size={28}/>
                            </button>
                        </div>
                        
                        <div className='flex flex-col p-6 space-y-8 mt-10'>
                            {routes.map(({ path, name, end }) => (
                                <NavLink 
                                    key={path} 
                                    to={path} 
                                    end={end}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `relative inline-block pb-1 w-fit
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
                </div>
                
            </div>
        </nav>
    );
}
{/* <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 py-4">Resume</a></li> */}