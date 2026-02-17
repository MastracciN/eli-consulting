import profile from '../assets/profile.jpg'
// import hero from ''

const About = () => {

    return (
        <div className='mx-auto'>
            <section id='hero' className='relative bg-cover bg-center'>
                <div className='absolute inset-0 bg-black/50'></div>
                <div className='h-[350px] flex items-center justify-center'>
                    <h1 className="text-center text-5xl font-bold">About</h1>
                </div>
            </section>

            <main className='flex flex-col space-y-20 max-w-[1200px] mx-auto mt-20'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={profile} 
                            alt="Profile Picture" 
                            className="w-50 md:w-56 lg:w-70 xl:w-70 aspect-square rounded-full object-cover mb-12 md:mb-6 lg:mb-10"/>
                    </div>
                    <div className="w-full md:w-1/2 flex-col justify-center items-center space-y-4">
                        <h2 className='text-3xl font-bold'>Heading</h2>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center space-y-4'>
                    <div className="w-full md:w-1/2 flex-col justify-center items-center space-y-4">
                        <h2 className='text-3xl font-bold'>Heading</h2>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                            officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img src={profile} 
                            alt="Profile Picture" 
                            className="w-50 md:w-56 lg:w-70 xl:w-70 aspect-square rounded-full object-cover mb-12 md:mb-6 lg:mb-10"/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;