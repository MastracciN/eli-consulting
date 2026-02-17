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
        <div className='mx-auto'>

            <section id='hero' className='relative bg-cover bg-center'>
                <div className='absolute inset-0 bg-black/50'></div>
                <div className='h-[350px] flex items-center justify-center'>
                    <h1 className="text-center text-5xl font-bold">Contact</h1>
                </div>
            </section>

            <section id='contact'>
                <div className='w-full max-w-[1200px] px-6'>
                    <h2 className="text-4xl font-bold mb-8">Contact</h2>

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
            </section>


        </div>
    );
};

export default Contact;