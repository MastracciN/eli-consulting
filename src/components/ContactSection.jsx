import { NavLink } from "react-router-dom";

export default function ContactSection() { 

    return(
        <section id='contact' className='relative bg-cover bg-center'>
            <div className='absolute inset-0 bg-black/50'></div>

                <div className='relative min-h-[30vh] flex items-center'>
                    <div className='w-full max-w-[1400px] mx-auto flex items-center justify-between'>
                        <h2 className="text-4xl font-bold">Begin the Journey</h2>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                `px-6 py-3 rounded-lg font-semibold transition ${
                                isActive
                                    ? 'bg-black text-white'
                                    : 'border border-black text-black hover:bg-black hover:text-white'
                                }`
                            }
                            >
                                Go to Contact
                        </NavLink>
                    </div>
                </div>
            </section>

    );
}