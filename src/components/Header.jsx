const Header = () => {

    return (
        <header className="sticky top-5 pr-5 z-50 flex justify-end w-full">
            {/* <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center"> */}
              {/* <nav className={`inline-flex items-center space-x-10 rounded-xl transition-all duration-300 ${scrolled ? "bg-white shadow-md px-8 py-4" : "bg-transparent px-8 py-4"}`}> */}
            {/* <nav className={`inline-flex items-center space-x-10 rounded-xl transition-all duration-300`}> */}
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;

                    {/* <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" 
                        className="hover:text-blue-500 py-4">Resume</a></li> */}