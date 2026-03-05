import { NavLink } from 'react-router-dom';
import ContactSection from '../components/ContactSection';

const Home = () => {

    return (
        <div>
            {/* Hero */}
            <section id='hero' className='relative bg-cover bg-center'>
                <div className='absolute inset-0 bg-black/90'></div>

                <div className='relative min-h-[50vh] flex items-center'>
                    <div className='w-full max-w-[1400px] mx-auto text-white'>
                        <h1 className="text-5xl font-bold px-8 py-4">Headline</h1>
                        <h2 className="text-3xl font-bold px-8">Headline</h2>
                    </div>
                </div>
            </section>

            <section>
                <div className="min-h-[50vh] w-full max-w-[1400px] mx-auto">
                    <p className='px-8'>bla bla bla</p>
                </div>
            </section>


            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;