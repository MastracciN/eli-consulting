import { NavLink } from "react-router-dom";
import lakeHero from '../assets/lake-hero.jpg'

export default function ContactSection() { 

    return(
        <section id='contact' 
            className='relative bg-cover bg-center py-0 md:py-15 px-2 md:px-4'
            style={{ backgroundImage: `url(${lakeHero})` }}
        >
            <div className='absolute inset-0 bg-black/60'></div>

            <div className='relative flex items-center'>
                <div className='w-full max-w-[1400px] mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 py-8 md:py-0 items-center justify-between'>
                    <div className=" px-6 md:px-0 flex flex-col text-white space-y-4 mb-8 md:mb-0 drop-shadow-2xl">
                        <h2 className="text-4xl font-bold text-white font-serif">Begin the Journey</h2>
                        <p className="text-xl">
                            Reconciliation is not a single event or workshop.
                        </p>
                        <p className="text-xl">
                            It is a long-term commitment to relationship, learning, and shared responsibility.
                        </p>
                        <p className="text-xl">
                            If your organization is ready to walk alongside Indigenous communities in a meaningful way, we welcome that journey together.
                        </p>
                    </div>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            `px-6 py-3 rounded-lg font-semibold transition ${
                            isActive
                                ? 'bg-black text-white'
                                : 'border border-white text-white hover:bg-green-900 hover:text-white'
                            }`
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </section>

    );
}