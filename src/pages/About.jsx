import ContactSection from '../components/ContactSection'
import lakeHero from '../assets/lake-hero.jpg'
import woodpattern from '../assets/woodpattern.jpg'
import profile from '../assets/profile.jpg'
import memorial from '../assets/memorial.jpg'
import rocksitting from '../assets/rocksitting.jpg'
import water from '../assets/water.jpg'
import walking from '../assets/walking.jpg'

const About = () => {

    return (
        <div className='mx-auto'>
            <section 
                id='hero' 
                className='relative bg-cover bg-center md:bg-fixed h-[60vh]'
                style={{ backgroundImage: `url(${lakeHero})` }}
            >
                <div className='absolute inset-0 bg-black/60'></div>

                <div className=' relative z-10 flex flex-col h-full items-center justify-center text-white'>
                    <img 
                        src={profile} 
                        alt="Photo of Elijah" 
                        className="w-50 md:w-56 lg:w-70 xl:w-72 aspect-square rounded-full object-cover mb-12 md:mb-6 lg:mb-10 shadow-xl shadow-black/20 border-5 border-white"
                    />
                    <h1 className=" text-2xl md:text-3xl text-white drop-shadow-lg font-serif mb-2">About the Founder</h1>
                    <h3 className="text-4xl md:text-5xl font-serif">
                                Elijah Blackbird
                    </h3>
                </div>
            </section>

            <main className='w-full flex flex-col bg-main'>
                {/* <section className="py-20 px-6 bg-crm">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex justify-center items-end">
                            <img 
                                src={profile} 
                                alt="Photo of Elijah" 
                                className="w-50 md:w-56 lg:w-70 xl:w-72 aspect-square rounded-full object-cover mb-12 md:mb-6 lg:mb-10 shadow-xl shadow-black/20"
                            />
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center items-start space-y-2">
                            <p className='text-2xl'>My name is</p>
                            <h3 className="text-4xl md:text-5xl font-serif">
                                Elijah Blackbird
                            </h3>
                        </div>
                    </div>
                </section> */}

                <div className='relative bg-dg text-white py-20 overflow-hidden'>
                    <div 
                        className="absolute inset-0 opacity-2 bg-repeat"
                        alt='Wood pattern'
                        style={{ backgroundImage: `url(${woodpattern})` }}    
                    ></div>
                    <h3 className='text-4xl text-center drop-shadow-5xl font-serif'>I am a proud Ojibwe from <b>Walpole Island First Nation</b>.</h3>
                </div>

                <div className='max-w-[1200px] mx-auto space-y-30 mt-30 px-6'>
                    <div className='flex flex-col md:flex-row  justify-center space-x-12 items-center space-y-2 md:space-y-0'>
                        <div className="w-full md:w-1/2 flex flex-col space-y-2 text-l">
                            <h3 className='text-4xl font-serif'>
                                My father, <b>Julius</b>, was born and raised on Walpole Island. He was a Residential School survivor. He rarely spoke about his experience, 
                                but he carried it throughout his life.   
                            </h3>
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
                        <img src={memorial} 
                            alt="Walpole Island Residential School Memorial" 
                            className="h-120 w-auto rounded-2xl shadow-xl shadow-black/30"
                        />
                    </div>
                </div>

                <div className='relative bg-dg text-white py-20 mt-30 overflow-hidden'>
                    <div 
                        className="absolute inset-0 opacity-2 bg-repeat"
                        alt="Wood pattern"
                        style={{ 
                            backgroundImage: `url(${woodpattern})`,
                            backgroundPosition: 'left' ,
                    }}></div>
                    <h3 className='text-4xl text-center drop-shadow-4xl font-serif'>It was at his Ojibwe funeral that something shifted within me.</h3>
                </div>

                <div className='max-w-[1200px] mx-auto space-y-30 mt-30 px-6'>
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 '>
                        <div className="w-1/2 relative flex justify-center items-center">
                            <img src={walking} 
                                alt="Elijah and his daughter hiking in the forest" 
                                className="h-120 w-auto rounded-2xl shadow-xl shadow-black/30 object-cover border-5 border-crm"
                            />
                            <img src={water} 
                                alt="Looking out on a lake" 
                                className="absolute bottom-0 left-0 h-60 w-60 rounded-xl shadow-lg shadow-black/40 object-cover -translate-x-6 translate-y-16"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex-col justify-center items-center space-y-4 text-l">
                            <h3 className='text-4xl font-serif'>
                                In that moment I realized what I had been missing, and I promised him and myself that I would walk more fully in who I am.
                            </h3>
                            <p>
                                Today I teach my children to be proud of their Ojibwe roots, just as my father taught me.
                                As I continue reconnecting with traditional teachings, I share this knowledge so others may better understand Indigenous 
                                perspectives and experiences. My hope is that no young Indigenous person grows up disconnected from their identity or feeling 
                                they must be ashamed of who they are.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='font-serif text-4xl space-y-10 my-30 mx-auto text-text'>
                        <p>
                            Reconciliation begins with <b>conversation</b>.
                        </p>
                        <p className='px-15'>
                           It begins with <b>curiosity</b>. 
                        </p>
                        <p className='px-30'>
                            It begins with <b>listening</b>.
                        </p>
                        <p className='mt-6'>
                            And from those conversations, new <b>understanding</b> grows.
                        </p>
                </div>
            </main>

            <ContactSection/>
        </div>
    );
};

export default About;