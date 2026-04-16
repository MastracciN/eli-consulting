import { NavLink } from "react-router-dom";
import alltrees from '../assets/alltrees.webp'

export default function ContactSection() { 

    return(
        <section id='contact' 
            className='relative bg-cover bg-center py-0 md:py-15 px-2 md:px-4'
            style={{ backgroundImage: `url(${alltrees})` }}
        >
            <div className='absolute inset-0 bg-black/60'></div>

            <div className='relative flex items-center'>
                <div className='w-full max-w-[1400px] mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 py-8 md:py-0 items-center justify-between'>
                    <div className=" px-6 lg:px-0 flex flex-col text-white mb-8 md:mb-0 drop-shadow-2xl">
                        <h2 className="text-3xl lg:text-5xl font-bold text-white font-serif mb-5">Begin the Journey</h2>
                        <div className="flex flex-col text-xl space-y-2">
                            <p className="text-white/90">
                                Reconciliation is not a single event or workshop.
                            </p>
                            <p className="text-white">
                                It is a long-term commitment to relationship, learning, and shared responsibility.
                            </p>
                            <p className="text-white/90">
                                If your organization is ready to walk alongside Indigenous communities in a meaningful way, we welcome that journey together.
                            </p>
                        </div>
                    </div>
                    <NavLink
                        to='/contact'
                        className='inline-block px-10 py-4 text-white font-medium rounded-lg bg-dg
                            shadow-md transition-all duration-300
                            hover:brightness-115 hover:shadow-lg hover:-translate-y-0.5
                            focus:outline-none focus:ring-2 focus:ring-dg/50'
                    >
                        Contact   
                    </NavLink>

                    
                </div>
            </div>
        </section>

    );
}