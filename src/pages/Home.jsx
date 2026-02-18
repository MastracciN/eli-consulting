import { NavLink } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            {/* Hero */}
            <section id='hero' className='relative bg-cover bg-center'>
                <div className='absolute inset-0 bg-black/50'></div>

                <div className='relative min-h-[50vh] flex items-center'>
                    <div className='w-full max-w-[1200px] mx-auto'>
                        <h1 className="text-5xl font-bold p-8">Headline</h1>
                    </div>
                </div>
            </section>

            <p className="min-h-[50vh]">bla bla bla</p>

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