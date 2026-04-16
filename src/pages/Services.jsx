import woodpattern from '../assets/woodpattern.jpg'
// import feather from '../assets/blackbird-feather.svg'
import tree from '../assets/tree.webp'
import moss400 from '../assets/moss-400.webp'
import moss800 from '../assets/moss-800.webp'
import moss1600 from '../assets/moss-1600.webp'
import { HeartHandshake, Feather } from 'lucide-react'
import ContactSection from '../components/ContactSection'

const Services = () => {

    return (
        <div className="bg-main">
            <section id='hero' className='relative h-[35vh]'>
                <img
                    src={moss1600}
                    srcSet={`
                        ${moss400} 400w,
                        ${moss800} 800w,
                        ${moss1600} 1600w
                    `}
                    sizes='
                        (max-width: 400px) 100vw,
                        (max-width: 800px) 100vw, 
                        1600px
                    '
                    alt='A forest with rocks and trees covered in moss'
                    className='absolute inset-0 w-full h-full object-cover bg-cover bg-center'
                    loading='eager'
                    fetchPriority='high'
                />
                <div className='absolute inset-0 bg-black/75'></div>

                <div className='relative flex items-center h-full px-6'>
                    <div className='max-w-[1200px] mx-auto w-full text-white text-left items-center'>
                        {/* <h2 className="text-3xl md:text-5xl font-serif drop-shadow-lg py-8 md:p-0 font-bold max-w-5xl">
                            Services
                        </h2> */}
                        <h3 className="text-4xl md:text-7xl font-serif drop-shadow-lg py-8 md:p-0 font-bold max-w-5xl">
                            What we do
                        </h3>
                    </div>
                </div>
            </section>

            <main className='bg-main'>
                <div className='relative bg-dg text-white py-20 overflow-hidden'>
                    <div 
                        className="absolute inset-0 opacity-2 z-0 pointer-events-none"
                        alt='Wood pattern'
                        style={{ backgroundImage: `url(${woodpattern})` }}    
                    ></div>
                    <div className='max-w-[1400px] mx-auto flex flex-col md:flex-row space-x-0 md:space-x-6 px-4 justify-center items-center'>
                        <h3 className='text-4xl md:text-5xl lg:text-7xl drop-shadow-5xl font-serif max-w-[500px] mb-6 md:mb-0'>Walking Together in Two Worlds</h3>
                        <div className='flex flex-col space-y-2 max-w-[500px]'>
                                <p>Blackbird Bimaadiziwin Consulting is rooted in relationship.</p>
                                <p className='text-white/90'>
                                    Guided by the principle of Two-Eyed Seeing — learning to see 
                                    with the strengths of Indigenous knowledge and the strengths of 
                                    Western systems — we help organizations walk in both worlds with integrity.
                                </p>
                                <p>
                                    Our work is inspired by the Two Row Wampum (Kaswentha), a treaty teaching that 
                                    reminds us we travel the river of life in separate vessels. Each vessel carries 
                                    its own laws, governance, and ways of knowing. We do not steer each other’s canoe.
                                </p>
                                <p className='text-white/90'>Instead, we travel side by side with respect.</p>
                                <p>Reconciliation is not about becoming the same.</p>
                                <p className='text-white/90'>It is about strengthening one another while honouring difference.</p>
                        </div>
                    </div>
                </div>

                <section id="services" className='mt-10 md:mt-20 px-6 md:px-0'>

                    <div className='flex flex-col md:flex-row mt-10 md:space-x-8 space-y-8 md:space-y-0 max-w-[1400px] mx-auto w-full'>

                        <div className='flex flex-col space-y-2 flex-1 p-8 justify-center'>
                            <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif border-b-2 border-dg pb-4'>Our Services</h2>
                            <p className='text-2xl font-serif'>All services are grounded in <b>relationship</b>, <b>Two-Eyed Seeing</b>, and <b>shared responsibility</b>.</p>
                        </div>

                        <div className='flex flex-col flex-1 space-y-4 p-8 transition-all duration-300 bg-crm/50
                            hover:-translate-y-1 hover:shadow-2xl hover:bg-crm leading-relaxed border-l-2 border-dg/50'>
                            <div className='flex space-x-2 items-center border-b-2 border-dg/50 pb-4'>
                                <p className='text-2xl lg:text-3xl font-serif'>Indigenous Awareness & Truth Education</p>  
                            </div>
                            <p className='text-black/90'>Educational sessions designed to build understanding and empathy.</p>
                            <p className='text-black/80 font-medium'>Topics include:</p>
                            <div className='flex flex-col md:flex-row'>
                                <ul className='pl-5 space-y-2 text-black/90'>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Indigenous history in Canada</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Residential Schools and intergenerational impacts</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Truth and Reconciliation Commission Calls to Action</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Treaties and the Two Row Wampum</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Allyship and shared responsibility</span>
                                    </li>
                                </ul>
                            </div>
                            <p className='text-black/80'>These sessions create safe spaces for questions, learning, and meaningful dialogue.</p>
                        </div>
                        
                    </div>

                    <div className='flex flex-col md:flex-row mt-10 md:space-x-8 space-y-8 md:space-y-0 max-w-[1400px] mx-auto w-full'>
                        <div className='flex flex-col flex-1 space-y-4 p-8 transition-all duration-300 bg-crm/50
                            hover:-translate-y-1 hover:shadow-2xl hover:bg-crm leading-relaxed border-l-2 border-dg/50'>
                            <div className='flex space-x-2 items-center border-b-2 border-dg/50 pb-4'>
                                <p className='text-2xl lg:text-3xl font-serif'>Education & Youth Engagement</p>  
                            </div>
                            <p className='text-black/90'>Working with educators and students to build understanding early.</p>
                            <p className='text-black/80 font-medium'>Programs include:</p>
                            <div className='flex flex-col md:flex-row'>
                                <ul className='pl-5 space-y-2 text-black/90'>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Presentations for Grade K–8 students</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Workshops with secondary school teachers</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Curriculum-informed discussions on Indigenous history and identity</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Encouraging youth to ask questions and explore shared truths</span>
                                    </li>
                                </ul>
                            </div>
                            <p className='text-black/80'>Helping young people understand our shared history builds a stronger future for everyone.</p>
                        </div>
                        <div className='flex flex-col flex-1 space-y-4 p-8 transition-all duration-300 bg-crm/50
                            hover:-translate-y-1 hover:shadow-2xl hover:bg-crm leading-relaxed border-l-2 border-dg/50'>
                            <div className='flex space-x-2 items-center border-b-2 border-dg/50 pb-4'>
                                <p className='text-2xl lg:text-3xl font-serif'>Reconciliation Strategy & Organizational Advisory</p>  
                            </div>
                            <p className='text-black/90'>Supporting organizations committed to meaningful change.</p>
                            <p className='text-black/80 font-medium'>Services include:</p>
                            <div className='flex flex-col md:flex-row'>
                                <ul className='pl-5 space-y-2 text-black/90'>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Development of Indigenous pillars and reconciliation frameworks</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Organizational assessments and strategic guidance</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Aligning initiatives with TRC Calls to Action</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Leadership advisory on Indigenous inclusion and belonging</span>
                                    </li>
                                </ul>
                            </div>
                            <p className='text-black/80'>This work moves organizations beyond intention toward measurable action.</p>
                        </div>
                        
                    </div>

                    <div className='flex flex-col md:flex-row mt-10 md:space-x-8 space-y-8 md:space-y-0 max-w-[1400px] mx-auto w-full'>
                        <div className='flex flex-col flex-1 space-y-4 p-8 transition-all duration-300 bg-crm/50
                            hover:-translate-y-1 hover:shadow-2xl hover:bg-crm leading-relaxed border-l-2 border-dg/50'>
                            <div className='flex space-x-2 items-center border-b-2 border-dg/50 pb-4'>
                                <p className='text-2xl lg:text-3xl font-serif'>Community Relationship Building</p>  
                            </div>
                            <p className='text-black/90'>Helping organizations build respectful and lasting relationships with Indigenous communities.</p>
                            <p className='text-black/80 font-medium'>Services include:</p>
                            <div className='flex flex-col md:flex-row'>
                                <ul className='pl-5 space-y-2 text-black/90'>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Guidance on ethical community engagement</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Connecting organizations with First Nation communities</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Partnership development rooted in reciprocity</span>
                                    </li>
                                    <li className='flex space-x-2'>
                                        <Feather className='w-4 h-4 mt-1 text-dg shrink-0'/>
                                        <span>Land acknowledgement development grounded in meaningful action</span>
                                    </li>
                                </ul>
                            </div>
                            <p className='text-black/80'>Reconciliation grows through relationship, not transactions.</p>
                        </div>

                        <div className='flex flex-col flex-1 p-8'>
                            <img src={tree} 
                                alt="A red canoe floating on a lake surrounded by mountains" 
                                className="h-full lg:h-90 w-full rounded-lg object-cover z-20 
                                    transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                            />
                        </div>
                    </div>

                </section>

                <div className='relative bg-dg text-white py-10 md:py-20 overflow-hidden mt-20'>
                    <div 
                        className="absolute inset-0 opacity-2 z-0"
                        alt='Wood pattern'
                        style={{ backgroundImage: `url(${woodpattern})` }}    
                    ></div>
                </div>

                <section id='values' className='mx-auto my-20 px-6'>
                    <div className='flex flex-col md:flex-row max-w-[1400px] mx-auto justify-center md:space-x-12 items-center'>
                        <div className='max-w-[500px] items-center'>
                            <h2 className='text-4xl lg:text-6xl font-serif border-b-2 border-dg pb-4'>Our Values</h2>
                            <h3 className='text-3xl font-serif pt-2 text-black/90 mt-4'>Guided by the Seven Grandfather Teachings</h3>
                            <p className='mt-6'>The work of Blackbird Bimaadiziwin Consulting is guided by teachings that have guided Anishinaabe people for generations.</p>
                            <p className='mt-6 mb-6 lg:mb-0'>These teachings guide how we walk alongside organizations and communities.</p>
                        </div>

                        <div className=''>
                            <div className='p-4 mt-4 max-w-[300px] border-l-1 border-dg/70 
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-crm'>
                                <h4 className='text-xl font-serif'>Wisdom (Nbwaakaawin)</h4>
                                <p>Using knowledge and experience to guide decisions that benefit the community.</p>
                            </div>
                            <div className='p-4 mt-8 max-w-[300px] border-l-1 border-dg/70
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-crm'>
                                <h4 className='text-xl font-serif'>Love (Zaagi’idiwin)</h4>
                                <p>Approaching this work with compassion and care for people and relationships.</p>
                            </div>
                            <div className='p-4 mt-8 max-w-[300px] border-l-1 border-dg/70
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-crm'>
                                <h4 className='text-xl font-serif'>Respect (Mnaadendimowin)</h4>
                                <p>Honouring the dignity, knowledge, and perspectives of all people.</p>
                            </div>
                            <div className='p-4 mt-8 max-w-[300px] border-l-1 border-dg/70
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-crm'>
                                <h4 className='text-xl font-serif'>Bravery (Aakode’ewin)</h4>
                                <p>Having the courage to speak truth and engage in difficult conversations.</p>
                            </div>
                        </div>

                        <div className=''>
                            <div className='p-4 mt-8 max-w-[300px] border-l-1 border-dg/70
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-crm'>
                                <h4 className='text-xl font-serif'>Honesty (Gwekwaadziwin)</h4>
                                <p>Walking with integrity and openness in all relationships.</p>
                            </div>
                            <div className='p-4 mt-8 max-w-[300px] border-l-1 border-dg/70
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-crm'>
                                <h4 className='text-xl font-serif'>Humility (Dabaadendiziwin)</h4>
                                <p>Recognizing that we are all part of something greater than ourselves.</p>
                            </div>
                            <div className='p-4 mt-8 max-w-[300px] border-l-1 border-dg/70
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-crm'>
                                <h4 className='text-xl font-serif'>Truth (Debwewin)</h4>
                                <p>Seeking understanding through listening, reflection, and shared learning.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ContactSection/>

            </main>
        </div>
    );
};

export default Services;