import profile from '../assets/profile.jpg'

const About = () => {

    return (
        <div className="max-w-[1200px] p-4 mx-auto">
            <h1 className="text-center text-3xl  m-12">About Elijah</h1>

            <div className="flex flex-col md:flex-row justify-between">
                <aside className="w-1/2 flex justify-center items-center">
                    <img src={profile} alt="Profile Picture" 
                        className="w-50 md:w-56 lg:w-70 xl:w-70 aspect-square rounded-full object-cover mb-6 lg:mb-10"/>
                </aside>
                <main className="w-1/2 flex-col justify-center items-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.
                    </p>
                </main>
            </div>
        </div>
    );
};

export default About;