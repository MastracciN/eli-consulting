import { NavLink } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import forest from '../assets/forest-hero.jpg'

const Home = () => {

    return (
        <div>
            {/* Hero */}
            <section 
                id='hero' 
                className='relative bg-cover bg-center px-6'
                style={{ backgroundImage: `url(${forest})` }}    
            >
                <div className='absolute inset-0 bg-black/75'></div>

                <div className='relative min-h-[85vh] flex items-center'>
                    <div className='max-w-[1400px] mx-auto w-full text-white text-left'>
                        <h2 className="text-4xl md:text-6xl font-serif drop-shadow-lg py-8 md:p-0 font-bold max-w-5xl">
                            If your organization is ready to walk alongside Indigenous communities in a <em>meaningful</em> way, we welcome that journey together.
                        </h2>
                    </div>
                </div>
            </section>

            <main className='px-6'>
                <div className="max-w-[1400px] mx-auto">

                    {/* <section id="walking-together" className='py-20'>
                        <h2 className="text-4xl font-bold mb-8 font-serif">Walking Together in Two Worlds</h2>
                        <p>
                            Guided by the principle of <b>Two-Eyed Seeing</b> — learning to see with the strengths of Indigenous knowledge and the strengths of Western systems 
                            — we help organizations walk in both worlds with integrity.
                        </p>
                        <p>  
                            Our work is inspired by the Two Row Wampum (Kaswentha), a treaty teaching that reminds us we travel the river of life in separate vessels. 
                            Each vessel carries its own laws, governance, and ways of knowing. We do not steer each other’s canoe.
                        </p>
                        <p>
                            Instead, we travel side by side with respect.
                        
                        </p>
                        <p>
                            Reconciliation is not about becoming the same.
                        </p>
                        <p>
                            It is about strengthening one another while honouring difference.
                        </p>
                    </section>

                    <section id="bimaadiziwin" className='pb-20'>
                        <h2 className='text-4xl font-bold mb-8 font-serif'>Bimaadiziwin – Living the Good Life</h2>
                        <p>
                            <em>Bimaadiziwin</em> teaches that a good life is built through balance, responsibility, and community.
                        </p>
                        <p>
                            Indigenous teachings remind us that success is not measured only by achievement, but by how we care for one another and the relationships we build.
                        </p>
                        <p>
                            Organizations often have the tools and intentions for change. What is often missing is connection — connection to history, connection to community, 
                            and connection to the deeper responsibilities we share.
                        </p>
                        <p>
                            This work helps rebuild those relationships.
                        </p>
                        <p>
                            When trust is restored, transformation becomes possible.
                        </p>
                    </section> */}

                    <section id="services" className='flex flex-col items-center mt-30 space-y-2 mb-30'>
                        <h2 className='text-3xl font-serif'>Our Services</h2>
                        <h3 className='text-3xl font-serif'>All services are grounded in <b>relationship</b>, <b>Two-Eyed Seeing</b>, and <b>shared responsibility</b>.</h3>
                        
                        <div className='flex flex-col md:flex-row mt-10 md:space-x-8 space-y-8 md:space-y-0'>
                            <div className='flex flex-col flex-1 space-y-2 p-6 rounded-lg transition-all duration-300 hover:bg-dg/20 hover:shadow-xl'>
                                <p className='text-2xl font-serif'>Indigenous Awareness & Truth Education</p>
                                <p>Educational sessions designed to build understanding and empathy.</p>
                            </div>

                            <div className='flex flex-col flex-1 space-y-2 p-6 rounded-lg transition-all duration-300 hover:bg-dg/20 hover:shadow-xl'>
                                <p className='text-2xl font-serif'>Education & Youth Engagement</p>
                                <p>Working with educators and students to build understanding early.</p>
                            </div>
                            
                            <div className='flex flex-col  flex-1 space-y-2 p-6 rounded-lg transition-all duration-300 hover:bg-dg/20 hover:shadow-xl'>
                                <p className='text-2xl font-serif'>Reconciliation Strategy & Organizational Advisory</p>
                                <p>Supporting organizations committed to meaningful change.</p>
                            </div>
                            
                            <div className='flex flex-col flex-1 space-y-2 p-6 rounded-lg transition-all duration-300 hover:bg-dg/20 hover:shadow-xl'>
                                <p className='text-2xl font-serif'>Community Relationship Building</p>
                                <p>Helping organizations build respectful and lasting relationships with Indigenous communities.</p>
                            </div>
                        </div>

                        <NavLink
                            to='/services'
                            className="relative inline-block font-bold text-dg
                            after:absolute after:left-0 after:bottom-[1px]
                            after:h-[1px] after:w-full
                            after:origin-left
                            after:scale-x-0
                            after:bg-current
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100"
                        >
                            Learn more
                        </NavLink>
                    </section>


                </div>
            </main>


            <ContactSection/>
        </div>
    );
};

export default Home;