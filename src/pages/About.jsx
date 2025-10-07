import profile from '../assets/profile.jpg'

const About = () => {

    return (
        <div className="max-w-[1200px] p-4 mx-auto">
            <h1>About</h1>
            <div className="flex">
                <aside className="flex flex-col">
                    <img src={profile} alt="Profile Picture" 
                        className="w-50 md:w-56 lg:w-70 xl:w-70 aspect-square rounded-full object-cover mb-6 lg:mb-10 
                        transition-transform duration-300 hover:scale-102"/>
                </aside>
                <main>
                    <p>hey</p>
                </main>
            </div>
        </div>
    );
};

export default About;