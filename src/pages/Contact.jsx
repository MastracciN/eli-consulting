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
                    </div>

                    <div className="flex-1">
                        <h2 className="text-3xl font-serif border-b-2 border-dg/50 pb-4 mb-8">Send us a message</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 max-w-[600px]"
                        >
                            <div>
                                <label className="block mb-2 font-medium">Name</label>
                                <input type='text' name='name'
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                />
                                <label className="block mb-2 font-medium">Email</label>
                                <input type='text' name='email'
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                /> 
                                <label className="block mb-2 font-medium">Message</label>
                                <input type='text' name='message'
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                />  
                            </div>

                            <button type='submit'
                                className='px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition'
                            >Send Message
                            </button>
                        </form>
                    </div>
                </div>


            </section>


        </div>
    );
};

export default Contact;