import { NavLink } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

const Home = () => {

    return (
        <div>
            {/* Hero */}
            <section id='hero' className='relative bg-cover bg-center'>
                <div className='absolute inset-0 bg-black/90'></div>

                <div className='relative min-h-[50vh] flex items-center'>
                    <div className='w-full max-w-[1400px] mx-auto text-white'>
                        <h1 className="text-5xl font-bold px-8 py-4">Blackbird Bimaadiziwin Consulting</h1>
                        <h2 className="text-3xl font-bold px-8">We are all related. What we do to one another, we do to ourselves.</h2>
                    </div>
                </div>
            </section>

            <main>
                <div className="min-h-[50vh] w-full max-w-[1400px] mx-auto">

                    <section id="walking-together">
                        <h2>Walking Together in Two Worlds</h2>
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

                    <section id="bimaadiziwin">
                        <h2>Bimaadiziwin – Living the Good Life</h2>
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