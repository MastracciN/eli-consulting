import rockyriver from '../assets/rockyriver.jpg'

const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message")
        };

        console.log("Submitted:", data);

        e.target.reset();
    }

    return (
        <div className="bg-main">

            <section 
                id='hero' 
                className='relative bg-cover bg-center px-6'
                style={{ backgroundImage: `url(${rockyriver})` }}    
            >
                <div className='absolute inset-0 bg-black/75'></div>

                <div className='max-w-[1200px] mx-auto relative min-h-[30vh] flex text-white text-center items-center'>
                        <h3 className="text-4xl md:text-6xl font-serif drop-shadow-lg py-8 md:p-0 font-bold max-w-5xl">
                            Contact Us
                        </h3>
                </div>
            </section>


            <section id='contact' className="">
                <div className='flex flex-col md:flex-row space-x-0 md:space-x-12 max-w-[1200px] mx-auto px-6 py-12'>

                    <div className="flex flex-1 flex-col justify-center">
                        <div className='pl-8 py-4 border-l-2 border-dg/50'>
                            <h2 className='text-5xl font-serif'>Get in touch</h2>
                            <p className='mt-4'>If you would like to work with us or learn more, don't hesitate to send a message. We would love to hear from you.</p>
                            {/* <a 
                                href="https://www.linkedin.com/in/elijah-blackbird-he-him-390374206/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-block text-blue-600
                                        after:absolute after:left-0 after:bottom-0
                                        after:h-[1px] after:w-0
                                        after:bg-blue-600
                                        after:transition-all after:duration-300
                                        hover:after:w-full"
                            >
                                https://www.linkedin.com/in/elijah-blackbird-he-him-390374206/
                            </a> */}
                        </div>
                        <div className='flex mt-8 ml-8'>
                            <a 
                                href='https://www.linkedin.com/in/elijah-blackbird-he-him-390374206/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-dg transition transform hover:scale-110'>
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="currentColor"
                                    >
                                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.5 6.4 8v9.5h-5v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4v8.6h-5V8z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-5xl font-serif mb-8">Send us a message</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 max-w-[600px]"
                        >
                            <div>
                                <label className="block mb-1 font-medium">Name</label>
                                <input type='text' name='name' placeholder='John Smith'
                                    className="w-full border-b-2 border-dg/50 px-4 py-3 focus:outline-none focus:ring-2 focus:rounded-lg focus:ring-black"
                                    required
                                />
                                <label className="block mb-1 mt-6 font-medium">Email</label>
                                <input type='text' name='email' placeholder='jsmith@email.ca'
                                    className="w-full border-b-2 border-dg/50 px-4 py-3 focus:outline-none focus:ring-2 focus:rounded-lg focus:ring-black"
                                    required
                                /> 
                                <label className="block mb-1 mt-6 font-medium">Message</label>
                                <textarea 
                                    name='message'
                                    rows={4}
                                    className="w-full border-b-2 border-dg/50 px-4 py-3 focus:outline-none focus:ring-2 focus:rounded-lg focus:ring-black resize-y"
                                    placeholder='I would like to know more about..'
                                    required
                                />  
                            </div>

                            <button type='submit'
                                className='px-6 py-3 bg-dg/90 text-white font-semibold rounded-lg hover:bg-dg transition w-full cursor-pointer'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>


            </section>


        </div>
    );
};

export default Contact;