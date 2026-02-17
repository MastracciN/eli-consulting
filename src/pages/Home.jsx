const Home = () => {

    return (
        <div>
            {/* Hero */}
            <section id='hero' className='relative bg-cover bg-center'>
                <div className='absolute inset-0 bg-black/50'></div>

                <div className='relative min-h-[75vh] flex items-center'>
                    <div className='w-full max-w-[1200px] mx-auto'>
                        <h1 className="text-5xl font-bold">Quote</h1>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;