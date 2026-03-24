import forest from '../assets/forest-hero.jpg'
import woodpattern from '../assets/woodpattern.jpg'
import ContactSection from '../components/ContactSection';

const Services = () => {

    return (
        <div className="bg-main">
            <section 
                id='hero' 
                className='relative bg-cover bg-center px-6'
                style={{ backgroundImage: `url(${forest})` }}    
            >
                <div className='absolute inset-0 bg-black/75'></div>

                <div className='relative min-h-[40vh] flex items-center'>
                    <div className='max-w-[1400px] mx-auto w-full text-white text-left'>
                        {/* <h2 className="text-3xl md:text-5xl font-serif drop-shadow-lg py-8 md:p-0 font-bold max-w-5xl">
                            Services
                        </h2> */}
                        <h3 className="text-4xl md:text-6xl font-serif drop-shadow-lg py-8 md:p-0 font-bold max-w-5xl">
                            What we do
                        </h3>
                    </div>
                </div>
            </section>

            <main className='px-6 md:px-0'>
                    <div className='relative bg-dg text-white py-20 overflow-hidden'>
                        <div 
                            className="absolute inset-0 opacity-2 bg-repeat"
                            alt='Wood pattern'
                            style={{ backgroundImage: `url(${woodpattern})` }}    
                        ></div>
                        <div className='justify-center max-w-[800px] mx-auto flex flex-col space-y-2'>
                            <h3 className='text-4xl drop-shadow-5xl font-serif'>Walking Together in Two Worlds</h3>
                            <p>Blackbird Bimaadiziwin Consulting is rooted in relationship.</p>
                            <p>
                                Guided by the principle of Two-Eyed Seeing — learning to see 
                                with the strengths of Indigenous knowledge and the strengths of 
                                Western systems — we help organizations walk in both worlds with integrity.
                            </p>
                            <p>
                                Our work is inspired by the Two Row Wampum (Kaswentha), a treaty teaching that 
                                reminds us we travel the river of life in separate vessels. Each vessel carries 
                                its own laws, governance, and ways of knowing. We do not steer each other’s canoe.
                            </p>
                            <p>Instead, we travel side by side with respect.</p>
                            <p>Reconciliation is not about becoming the same.</p>
                            <p>It is about strengthening one another while honouring difference.</p>
                        </div>
                    </div>

                    {/* <section id='walkingtogether' className='mt-20'>
                        <div className='max-w-[1400px] mx-auto w-full flex flex-col space-y-2'>
                            <h2 className='text-4xl font-serif'>Walking Together in Two Worlds</h2>
                            <p>Blackbird Bimaadiziwin Consulting is rooted in relationship.</p>
                            <p>
                                Guided by the principle of Two-Eyed Seeing — learning to see 
                                with the strengths of Indigenous knowledge and the strengths of 
                                Western systems — we help organizations walk in both worlds with integrity.
                            </p>
                            <p>
                                Our work is inspired by the Two Row Wampum (Kaswentha), a treaty teaching that 
                                reminds us we travel the river of life in separate vessels. Each vessel carries 
                                its own laws, governance, and ways of knowing. We do not steer each other’s canoe.
                            </p>
                            <p>Instead, we travel side by side with respect.</p>
                            <p>Reconciliation is not about becoming the same.</p>
                            <p>It is about strengthening one another while honouring difference.</p>
                        </div>

                    </section> */}

                    <section id="services" className='flex flex-col items-center py-20 space-y-2'>

                        <h2 className='text-3xl font-serif'>Our Services</h2>
                        <p className='text-3xl font-serif'>All services are grounded in <b>relationship</b>, <b>Two-Eyed Seeing</b>, and <b>shared responsibility</b>.</p>

                        <div className='flex flex-col md:flex-row mt-10 md:space-x-8 space-y-8 md:space-y-0 max-w-[1400px] mx-auto w-full'>
                            <div className='flex flex-col flex-1 space-y-2 p-8 rounded-lg transition-all duration-300 bg-crm hover:bg-black/10 hover:shadow-xl border-1 border-dg/50'>

                                <p className='text-2xl font-serif'>Indigenous Awareness & Truth Education</p>
                                <p>Educational sessions designed to build understanding and empathy.</p>
                                <p>Topics include:</p>
                                <ul className='list-disc pl-5'>
                                    <li>Indigenous history in Canada</li>
                                    <li>Residential Schools and intergenerational impacts</li>
                                    <li>Truth and Reconciliation Commission Calls to Action</li>
                                    <li>Treaties and the Two Row Wampum</li>
                                    <li>Allyship and shared responsibility</li>
                                </ul>
                                <p>These sessions create safe spaces for questions, learning, and meaningful dialogue.</p>
                            </div>

                            <div className='flex flex-col flex-1 space-y-2 p-8 rounded-lg transition-all duration-300 bg-crm hover:bg-black/10 hover:shadow-xl border-1 border-dg/50'>
                                <p className='text-2xl font-serif'>Education & Youth Engagement</p>
                                <p>Working with educators and students to build understanding early.</p>
                                <p>Programs include:</p>
                                <ul className='list-disc pl-5'>
                                    <li>Presentations for Grade K–8 students</li>
                                    <li>Workshops with secondary school teachers</li>
                                    <li>Curriculum-informed discussions on Indigenous history and identity</li>
                                    <li>Encouraging youth to ask questions and explore shared truths</li>
                                </ul>
                                <p>Helping young people understand our shared history builds a stronger future for everyone.</p>
                            </div>

                        </div>

                        <div className='flex flex-col md:flex-row mt-5 md:space-x-8 space-y-8 md:space-y-0 max-w-[1400px] mx-auto w-full'>
                            <div className='flex flex-col flex-1 space-y-2 p-8 rounded-lg transition-all duration-300 bg-crm hover:bg-black/10 hover:shadow-xl border-1 border-dg/50'>
                                <p className='text-2xl font-serif'>Reconciliation Strategy & Organizational Advisory</p>
                                <p>Supporting organizations committed to meaningful change.</p>
                                <p>Services include:</p>
                                <ul className='list-disc pl-5'>
                                    <li>Development of Indigenous pillars and reconciliation frameworks</li>
                                    <li>Organizational assessments and strategic guidance</li>
                                    <li>Aligning initiatives with TRC Calls to Action</li>
                                    <li>Leadership advisory on Indigenous inclusion and belonging</li>
                                </ul>
                                <p>This work moves organizations beyond intention toward measurable action.</p>
                            </div>
                            
                            <div className='flex flex-col flex-1 space-y-2 p-8 rounded-lg transition-all duration-300 bg-crm hover:bg-black/10 hover:shadow-xl border-1 border-dg/50'>
                                <p className='text-2xl font-serif'>Community Relationship Building</p>
                                <p>Helping organizations build respectful and lasting relationships with Indigenous communities.</p>
                                <p>Services include:</p>
                                <ul className='list-disc pl-5'>
                                    <li>Guidance on ethical community engagement</li>
                                    <li>Connecting organizations with First Nation communities</li>
                                    <li>Partnership development rooted in reciprocity</li>
                                    <li>Land acknowledgement development grounded in meaningful action</li>
                                </ul>
                                <p>Reconciliation grows through relationship, not transactions.</p>
                            </div>

                        </div>

                    </section>

                    <section id='values' className='max-w-[1400px] mx-auto mb-20'>
                        <h2 className='text-4xl font-serif'>Our Values</h2>
                        <h3 className='text-3xl font-serif pt-2'>Guided by the Seven Grandfather Teachings</h3>
                        <p className='pt-2'>The work of Blackbird Bimaadiziwin Consulting is guided by teachings that have guided Anishinaabe people for generations.</p>
                        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mt-8 justify-center items-center'>
                            <div className='p-4 text-center rounded-lg bg-crm border-1 border-dg/50 max-w-[300px] '>
                                <h4>Wisdom (Nbwaakaawin)</h4>
                                <p>Using knowledge and experience to guide decisions that benefit the community.</p>
                            </div>
                            <div className='p-4 text-center rounded-lg bg-crm border-1 border-dg/50 max-w-[300px]'>
                                <h4>Love (Zaagi’idiwin)</h4>
                                <p>Approaching this work with compassion and care for people and relationships.</p>
                            </div>
                            <div className='p-4 md:py-7 text-center rounded-lg bg-crm border-1 border-dg/50 max-w-[300px]'>
                                <h4>Respect (Mnaadendimowin)</h4>
                                <p>Honouring the dignity, knowledge, and perspectives of all people.</p>
                            </div>
                            <div className='p-4 md:py-7 text-center rounded-lg bg-crm border-1 border-dg/50 max-w-[300px]'>
                                <h4>Bravery (Aakode’ewin)</h4>
                                <p>Having the courage to speak truth and engage in difficult conversations.</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mt-2 md:mt-8 justify-center items-center'>
                            <div className='p-4 md:py-7 text-center rounded-lg bg-crm border-1 border-dg/50 max-w-[300px]'>
                                <h4>Honesty (Gwekwaadziwin)</h4>
                                <p>Walking with integrity and openness in all relationships.</p>
                            </div>
                            <div className='p-4 md:py-7 text-center rounded-lg bg-crm border-1 border-dg/50 max-w-[300px]'>
                                <h4>Humility (Dabaadendiziwin)</h4>
                                <p>Recognizing that we are all part of something greater than ourselves.</p>
                            </div>
                            <div className='p-4 text-center rounded-lg bg-crm border-1 border-dg/50 max-w-[300px]'>
                                <h4>Truth (Debwewin)</h4>
                                <p>Seeking understanding through listening, reflection, and shared learning.</p>
                            </div>
                        </div>

                        <p className='mt-8'>These teachings guide how we walk alongside organizations and communities.</p>
                    </section>

                    <ContactSection/>

                </main>
        </div>
    );
};

export default Services;