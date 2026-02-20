import { NavLink } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            {/* Hero */}
            <section id='hero' className='relative bg-cover bg-center'>
                <div className='absolute inset-0 bg-black/50'></div>

                <div className='relative min-h-[50vh] flex items-center'>
                    <div className='w-full max-w-[1200px] mx-auto'>
                        <h1 className="text-5xl font-bold px-8 py-4">Headline</h1>
                        <h2 className="text-3xl font-bold px-8">Headline</h2>
                    </div>
                </div>
            </section>

            <section>
                <div className="min-h-[50vh] w-full max-w-[1200px] mx-auto">
                    <p className='px-8'>bla bla bla</p>
                </div>
            </section>

            {/* Let's chat */}
            <section id='hero' className='relative bg-cover bg-center'>
                <div className='absolute inset-0 bg-black/50'></div>

                <div className='relative min-h-[30vh] flex items-center'>
                    <div className='w-full max-w-[1200px] mx-auto flex items-center justify-between'>
                        <h2 className="text-4xl font-bold">Contact</h2>
                        <NavLink
                            to='/contact'
                            className={({ isActive }) =>
                                `px-6 py-3 rounded-lg font-semibold transition ${
                                    isActive
                                        ? 'bg-black text-white'
                                        : 'border border-black text-black hover:bg-black hover:text-white'
                                }`
                        }
                        >Go to Contact</NavLink>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Home;