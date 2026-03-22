import forest from '../assets/forest-hero.jpg'
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

                    <section id="services" className='flex flex-col items-center py-20 space-y-2'>
                        <h2 className='text-3xl font-serif'>Our Services</h2>
                        <p className='text-3xl font-serif'>All services are grounded in <b>relationship</b>, <b>Two-Eyed Seeing</b>, and <b>shared responsibility</b>.</p>
                        <div className='flex flex-col md:flex-row mt-10 md:space-x-8 space-y-8 md:space-y-0 max-w-[1400px]'>
                            <div className='flex flex-col flex-1 space-y-2 p-8 rounded-lg transition-all duration-300 bg-crm hover:bg-black/10 hover:shadow-xl border-1 border-dg/50'>
                                <p className='text-2xl font-serif'>Indigenous Awareness & Truth Education</p>
                                <p>Educational sessions designed to build understanding and empathy.</p>
                            </div>

                            <div className='flex flex-col flex-1 space-y-2 p-8 rounded-lg transition-all duration-300 bg-crm hover:bg-black/10 hover:shadow-xl border-1 border-dg/50'>
                                <p className='text-2xl font-serif'>Education & Youth Engagement</p>
                                <p>Working with educators and students to build understanding early.</p>
                            </div>
                            
                            <div className='flex flex-col flex-1 space-y-2 p-8 rounded-lg transition-all duration-300 bg-crm hover:bg-black/10 hover:shadow-xl border-1 border-dg/50'>
                                <p className='text-2xl font-serif'>Reconciliation Strategy & Organizational Advisory</p>
                                <p>Supporting organizations committed to meaningful change.</p>
                            </div>
                            
                            <div className='flex flex-col flex-1 space-y-2 p-8 rounded-lg transition-all duration-300 bg-crm hover:bg-black/10 hover:shadow-xl border-1 border-dg/50'>
                                <p className='text-2xl font-serif'>Community Relationship Building</p>
                                <p>Helping organizations build respectful and lasting relationships with Indigenous communities.</p>
                            </div>
                        </div>

                    </section>

                    <ContactSection/>
                </main>
        </div>
    );
};

export default Services;