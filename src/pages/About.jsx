import ContactSection from '../components/ContactSection'
import lakeHero400 from '../assets/lake-hero-400.webp'
import lakeHero800 from '../assets/lake-hero-800.webp'
import lakeHero1800 from '../assets/lake-hero-1800.webp'
import woodpattern from '../assets/woodpattern.webp'
import profile from '../assets/profile.webp'
import memorial from '../assets/memorial.webp'
import walking from '../assets/walking.webp'

const About = () => {

    return (
        <div className='mx-auto'>
            <section id='hero' className='relative h-[65vh]'>
                <img
                    src={lakeHero1800}
                    srcSet={`
                        ${lakeHero400} 400w,
                        ${lakeHero800} 800w,
                        ${lakeHero1800} 1800w
                    `}
                    sizes='
                        (max-width: 400px) 100vw,
                        (max-width: 800px) 100vw, 
                        1800px
                    '
                    alt='Canoe on a lake surrounded by mountains'
                    className='absolute inset-0 w-full h-full object-cover bg-cover bg-center'
                    loading='eager'
                    fetchPriority='high'
                />

                <div className='absolute inset-0 bg-black/60'></div>

                <div className=' relative flex flex-col h-full items-center justify-center text-white'>
                    <img 
                        src={profile} 
                        alt="Photo of Elijah" 
                        className="w-50 md:w-56 lg:w-70 xl:w-72 aspect-square rounded-full object-cover mb-12 md:mb-6 lg:mb-10 shadow-xl shadow-black/20 border-5 border-white"
                    />
                    <h1 className=" text-2xl md:text-3xl text-white drop-shadow-lg font-serif mb-2">About the Founder</h1>
                    <p className="text-4xl md:text-5xl font-serif">Elijah Blackbird</p>
                </div>
            </section>

            <main className='bg-main pb-15 lg:pb-25'>

                <div className='relative bg-dg text-white py-20 overflow-hidden'>
                    <div 
                        className="absolute inset-0 opacity-2 pointer-events-none"
                        alt='Wood pattern'
                        style={{ backgroundImage: `url(${woodpattern})` }}    
                    ></div>
                    <h2 className='px-2 relative text-4xl text-center drop-shadow-5xl font-serif'>I am a proud Ojibwe from <b>Walpole Island First Nation</b>.</h2>
                </div>

                <section id='myfather' className='mt-10 md:mt-20'>
                    <div className='max-w-[1400px] mx-auto px-4'>
                        <div className='flex flex-col lg:flex-row items-center justify-center md:space-x-8 space-y-10 lg:space-y-0'>
                            <div className='max-w-2xl space-y-4 md:border-l-2 border-dg/50 md:px-10'>
                                <h2 className='text-2xl md:text-4xl font-serif'>                                
                                    My father, <b>Julius</b>, was born and raised on Walpole Island. He was a Residential School survivor. He rarely spoke about his experience, 
                                    but he carried it throughout his life.   
                                </h2>
                                <p>
                                    He was proud to be <b>Native</b>.
                                </p>
                                <p>
                                    Proud to be <b>Ojibwe</b>.
                                </p>
                                <p>
                                    Proud to be <b>Indian</b>.
                                </p>
                                <p>
                                    He raised his children off reserve knowing that walking between cultures would not always be easy. My mother is of European descent, and from a
                                    young age I was living in two worlds, even before I understood what that meant.
                                    As a young person visiting the reserve, my father’s eyes were filled with pride and memory. Mine often saw struggle. I did not yet see the strength 
                                    of my people.
                                    When my father retired, he said the land was calling him home.
                                </p>
                            </div>
                            {/* <div className="relative flex justify-center items-center">
                                <div className="absolute top-0 left-0 h-30 w-30 bg-dg rounded-lg -translate-x-4 -translate-y-4 z-10"></div>
                                <div className="absolute bottom-0 right-0 h-30 w-30 bg-dg rounded-lg translate-x-4 translate-y-4 z-10"></div> */}
                                
                                <img src={memorial} 
                                    alt="Walpole Island Residential School Memorial" 
                                    className="h-120 w-auto rounded-2xl shadow-xl shadow-black/30 z-20"
                                />
                            {/* </div> */}
                        </div>
                    </div>
                </section>

                <div className='relative bg-dg text-white py-20 mt-20 overflow-hidden px-6'>
                    <div 
                        className="absolute inset-0 opacity-2 pointer-events-none"
                        alt="Wood pattern"
                        style={{ 
                            backgroundImage: `url(${woodpattern})`,
                            backgroundPosition: 'left' ,
                    }}></div>
                    <h2 className='text-4xl text-center drop-shadow-4xl font-serif'>It was at his Ojibwe funeral that something shifted within me.</h2>
                </div>

                <section id='inthatmoment' className='my-20'>
                    <div className='max-w-[1400px] mx-auto px-6'>
                        <div className='flex flex-col-reverse lg:flex-row items-center justify-center md:space-x-8 space-y-10 lg:space-y-0'>
                            <img src={walking} 
                                alt="Two people walking down a path inbetween tall yellow trees" 
                                className="h-120 w-auto rounded-2xl shadow-xl shadow-black/30 object-cover z-20 mt-10 lg:mt-0"
                            />
                            <div className='max-w-xl space-y-4 md:border-l-2 border-dg/50 md:px-10'>
                                <h2 className='text-2xl md:text-4xl font-serif'>
                                    In that moment I realized what I had been missing, and I promised him and myself that I would walk more fully in who I am.
                                </h2>
                                <p>
                                    Today I teach my children to be proud of their Ojibwe roots, just as my father taught me.
                                    As I continue reconnecting with traditional teachings, I share this knowledge so others may better understand Indigenous 
                                    perspectives and experiences. My hope is that no young Indigenous person grows up disconnected from their identity or feeling 
                                    they must be ashamed of who they are.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <div className='flex flex-col font-serif items-center text-center text-2xl md:text-3xl lg:text-4xl space-y-10 mt-20 lg:mt-30 mx-auto italic'>
                        <p>
                            Reconciliation begins with <b>conversation</b>.
                        </p>
                        <p className=''>
                           It begins with <b>curiosity</b>. 
                        </p>
                        <p className=''>
                            It begins with <b>listening</b>.
                        </p>
                        <p className=''>
                            And from those conversations, new <b>understanding</b> grows.
                        </p>
                </div>
            </main>

            <ContactSection/>
        </div>
    );
};

export default About;