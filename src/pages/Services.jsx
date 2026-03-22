import forest from '../assets/forest-hero.jpg'

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
                        <h2 className="text-3xl md:text-5xl font-serif drop-shadow-lg py-8 md:p-0 font-bold max-w-5xl">
                            Services
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-serif drop-shadow-lg py-8 md:p-0 font-bold max-w-5xl">
                            What we do
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;