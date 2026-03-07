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
                    <div className='max-w-[1400px] mx-auto text-white'>
                        <h2 className="text-4xl md:text-6xl font-serif drop-shadow-lg px-2 py-8 md:p-0 font-bold">
                            If your organization is ready to walk alongside Indigenous communities in a <em>meaningful</em> way, we welcome that journey together.
                        </h2>
                    </div>
                </div>
            </section>

            <main className='px-6'>
                <div className="min-h-[50vh] w-full max-w-[1400px] mx-auto">

                    <section id="walking-together" className='py-20'>
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
                    </section>


                </div>
            </main>


            <ContactSection/>
        </div>
    );
};

export default Home;