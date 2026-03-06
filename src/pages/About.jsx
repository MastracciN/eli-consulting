import profile from '../assets/profile.jpg'
import ContactSection from '../components/ContactSection'
// import hero from ''

const About = () => {

    return (
        <div className='mx-auto'>
            <section id='hero' className='relative bg-cover bg-center'>
                <div className='absolute inset-0 bg-dg'></div>
                <div className=' relative h-[350px] flex items-center justify-center z-10'>
                    <h1 className=" text-5xl font-bold text-white drop-shadow-lg font-serif">About the Founder</h1>
                </div>
            </section>

            <main className='w-full flex flex-col'>

                <section className="w-full py-20 px-6 bg-white">
                    <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 flex justify-center items-center">
                        <img 
                            src={profile} 
                            alt="Profile Picture" 
                            className="w-50 md:w-56 lg:w-70 xl:w-72 aspect-square rounded-full object-cover mb-12 md:mb-6 lg:mb-10"
                        />
                        </div>
                        <div className="md:w-1/2 flex flex-col justify-center items-start space-y-2 text-left">
                            <p className='text-2xl'>My name is</p>
                            <h3 className="text-4xl md:text-5xl">
                                Elijah Blackbird
                            </h3>
                        </div>
                    </div>
                </section>

                <div className='bg-dg text-white py-8'>
                <h3 className='text-4xl text-center drop-shadow-4xl'>I am a proud Ojibwe from <b>Walpole Island First Nation</b>.</h3>
                </div>

                <div className='max-w-[1200px] mx-auto space-y-20 mt-20'>
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-4'>
                        <div className="w-full md:w-1/2 flex-col justify-center items-center space-y-4 text-l font-serif">
                            <h3 className='text-4xl'>
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
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={profile} 
                                alt="Profile Picture" 
                                className="w-50 md:w-56 lg:w-70 xl:w-70 aspect-square rounded-full object-cover mb-12 md:mb-6 lg:mb-10"/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center space-y-4'>
                        <div className="w-1/2 flex justify-center items-center">
                            <img src={profile} 
                                alt="Profile Picture" 
                                className="w-50 md:w-56 lg:w-70 xl:w-70 aspect-square rounded-full object-cover mb-12 md:mb-6 lg:mb-10"/>
                        </div>
                        <div className="w-full md:w-1/2 flex-col justify-center items-center space-y-4 text-l font-serif">
                            <h3 className='text-4xl'> It was at his Ojibwe funeral that something shifted within me.</h3>
                            <p>
                                In that moment I realized what I had been missing, and I promised him — and myself — that I would walk more fully in who I am.
                                Today I teach my children to be proud of their Ojibwe roots, just as my father taught me.
                                As I continue reconnecting with traditional teachings, I share this knowledge so others may better understand Indigenous perspectives and experiences. My hope is that no young Indigenous person grows up disconnected from their identity or feeling they must be ashamed of who they are.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-center font-serif text-xl space-y-2'>
                        <p>
                            Reconciliation begins with conversation.
                        </p>
                        <p>
                           It begins with curiosity. 
                        </p>
                        <p>
                            It begins with listening.
                        </p>
                        <p className='mt-6'>
                            And from those conversations, new understanding grows.
                        </p>
                    </div>
                </div>
            </main>

            <ContactSection/>
        </div>
    );
};

export default About;