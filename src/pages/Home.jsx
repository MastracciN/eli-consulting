import { NavLink } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import canoe from '../assets/canoe.webp'
import profile from '../assets/profile.webp'
import hero400 from '../assets/forest-hero-400.webp'
import hero800 from '../assets/forest-hero-800.webp'
import hero2000 from '../assets/forest-hero-2000.webp'
import feather1 from '../assets/feather1.webp'
import feather3 from '../assets/feather3.webp'
import woodpattern from '../assets/woodpattern.jpg'

const Home = () => {

    return (
        <div className='bg-main'>
            <section id='hero' className='relative px-6'>
                <img
                    src={hero2000}
                    srcSet={`
                        ${hero400} 400w,
                        ${hero800} 800w,
                        ${hero2000} 2000w
                    `}
                    sizes='
                        (max-width: 400px) 100vw,
                        (max-width: 800px) 100vw, 
                        2000px
                    '
                    alt='Forest background'
                    className='absolute inset-0 w-full h-full object-cover'
                    loading='eager'
                    fetchPriority='high'
                />

                <div className='absolute inset-0 bg-black/75'></div>

                <div className='relative min-h-[85vh] flex items-center'>
                    <div className='max-w-[1400px] mx-auto w-full text-white text-left'>
                        <h2 className="text-4xl md:text-6xl font-serif drop-shadow-lg py-8 md:p-0 font-bold max-w-5xl">
                            If your organization is ready to walk alongside Indigenous communities in a <em>meaningful</em> way, we welcome that journey together.
                        </h2>
                    </div>
                </div>
            </section>

            <main className='px-4'>
                <div className="">

                    <section id="services" className='flex flex-col lg:flex-row space-x-0 md:space-x-2 mt-10 lg:mt-20 items-center space-y-2 max-w-[1200px] mx-auto'>
                        <div className='flex flex-col flex-1'>
                            <h2 className='text-4xl md:text-6xl font-serif'>Our Services</h2>
                            <p className='text-xl font-serif mt-4'>All services are grounded in <b>relationship</b>, <b>Two-Eyed Seeing</b>, and <b>shared responsibility</b>.</p>
                            <NavLink
                                to='/services'
                                className="relative inline-flex w-fit font-bold text-dg mt-10
                                mb-8 md:mb-0
                                after:absolute after:left-0 after:bottom-[1px]
                                after:h-[1px] after:w-full
                                after:origin-left
                                after:scale-x-0
                                after:bg-current
                                after:transition-transform after:duration-300
                                hover:after:scale-x-100"
                            >
                                See our Services
                            </NavLink>
                        </div>
                        <div>
                            <div className='flex flex-col flex-2 md:space-x-8 space-y-8 md:space-y-4'>
                                {/* TODO: add lucide icon in a circle to left of border padding? */}
                                <div className='flex flex-col flex-1 space-y-4 p-8 transition-all duration-300 bg-crm/50
                                hover:-translate-y-1 hover:shadow-2xl hover:bg-crm leading-relaxed border-l-2 border-dg/50'>
                                    <p className='text-2xl font-serif'>Indigenous Awareness & Truth Education</p>
                                    <p>Educational sessions designed to build understanding and empathy.</p>
                                </div>

                                <div className='flex flex-col flex-1 space-y-4 p-8 transition-all duration-300 bg-crm/50
                                hover:-translate-y-1 hover:shadow-2xl hover:bg-crm leading-relaxed border-l-2 border-dg/50'>
                                    <p className='text-2xl font-serif'>Education & Youth Engagement</p>
                                    <p>Working with educators and students to build understanding early.</p>
                                </div>
                                
                                <div className='flex flex-col flex-1 space-y-4 p-8 transition-all duration-300 bg-crm/50
                                hover:-translate-y-1 hover:shadow-2xl hover:bg-crm leading-relaxed border-l-2 border-dg/50'>
                                    <p className='text-2xl font-serif'>Reconciliation Strategy & Organizational Advisory</p>
                                    <p>Supporting organizations committed to meaningful change.</p>
                                </div>
                                
                                <div className='flex flex-col flex-1 space-y-4 p-8 transition-all duration-300 bg-crm/50
                                hover:-translate-y-1 hover:shadow-2xl hover:bg-crm leading-relaxed border-l-2 border-dg/50'>
                                    <p className='text-2xl font-serif'>Community Relationship Building</p>
                                    <p>Helping organizations build respectful and lasting relationships with Indigenous communities.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='values' className='mt-20 md:mt-30'>
                        
                        {/* <div className='relative bg-dg overflow-hidden'>
                            <div 
                                className='absolute inset-0 opacity-2'
                                style={{ backgroundImage: `url(${woodpattern})` }}    
                            >
                            </div>
                        </div> */}

                        <div className='max-w-[1400px] mx-auto bg-main'>
                            <div className='flex flex-col lg:flex-row items-center justify-center md:space-x-12 lg:space-y-0'>
                                <div className='max-w-xl space-y-4 md:border-l-2 border-dg/50 md:px-10'>
                                    <h2 className='text-4xl md:text-5xl font-serif'>Bimaadiziwin - Living the Good Life</h2>
                                    <p>
                                        <em>Bimaadiziwin</em> teaches that a good life is built through balance, responsibility, and community.
                                    </p>
                                    <p>
                                        Indigenous teachings remind us that success is not measured only by achievement, but by how we care for one another and the relationships we build.
                                    </p>
                                    <p>
                                        Organizations often have the tools and intentions for change. What is often missing is connection — connection to history, 
                                        connection to community, and connection to the deeper responsibilities we share.
                                    </p>
                                    <p>
                                        This work helps rebuild those relationships.
                                    </p>
                                    <p>
                                        When trust is restored, transformation becomes possible.
                                    </p>
                                    <NavLink
                                        to='/services'
                                        className="relative inline-block font-bold text-dg mt-5
                                        after:absolute after:left-0 after:bottom-[1px]
                                        after:h-[1px] after:w-full
                                        after:origin-left
                                        after:scale-x-0
                                        after:bg-current
                                        after:transition-transform after:duration-300
                                        hover:after:scale-x-100"
                                    >
                                        See our Values
                                    </NavLink>
                                </div>

                                <div className='relative mt-10 lg:mt-0'>
                                    <img src={feather1}
                                        alt="Decorative feather"
                                        className='h-90 w-auto absolute left-95 top-60 z-0 opacity-80  rotate-40'
                                    />

                                    <img src={canoe} 
                                        alt="Point of View of a Canoe looking out on the water" 
                                        className="h-120 w-120 rounded-2xl shadow-xl shadow-black/30 object-cover z-10 relative"
                                    />
                                </div>
                                {/* <img src={canoe} 
                                    alt="Point of View of a Canoe looking out on the water" 
                                    className="h-120 w-120 rounded-2xl shadow-xl shadow-black/30 object-cover z-10 relative"
                                /> */}

                            </div>
                        </div>
                    </section>
                    
                    <section id='about' className='my-20 md:my-30'>
                        <div className='max-w-[1400px] mx-auto'>
                            <div className='flex flex-col-reverse lg:flex-row items-center justify-center md:space-x-12'>

                                <div className='relative mb-10 md:mb-0'>
                                    <img src={feather3}
                                        alt="Decorative feather"
                                        className='h-90 w-auto absolute -left-16 top-30 z-0 opacity-80 scale-x-[-1] -rotate-30'
                                    />

                                    <img src={profile} 
                                        alt="Portrait photo of Elijah" 
                                        className="h-90 w-auto rounded-2xl shadow-xl shadow-black/30 relative object-cover z-10"
                                    />
                                </div>

                                {/* <img src={profile} 
                                    alt="Portrait photo of Elijah" 
                                    className="h-90 w-auto rounded-2xl shadow-xl shadow-black/30 object-cover z-20"
                                /> */}

                                <div className='max-w-xl space-y-4 md:border-l-2 border-dg/50 md:px-10'>
                                    <h2 className='text-4xl md:text-5xl font-serif'>About the Founder</h2>
                                    <p>
                                        Elijah is a proud Ojibwe from Walpole Island First Nation and a seasoned Culture & Organizational Change leader.
                                         He brings over 25 years of experience guiding teams, organizations, and communities through meaningful transformation.
                                    </p>
                                    <NavLink
                                        to='/about'
                                        className="relative inline-block font-bold text-dg mt-5
                                        mb-12 md:mb-0
                                        after:absolute after:left-0 after:bottom-[1px]
                                        after:h-[1px] after:w-full
                                        after:origin-left
                                        after:scale-x-0
                                        after:bg-current
                                        after:transition-transform after:duration-300
                                        hover:after:scale-x-100"
                                    >
                                        Learn more about Elijah
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </section>

                </div>
            </main>


            <ContactSection/>
        </div>
    );
};

export default Home;