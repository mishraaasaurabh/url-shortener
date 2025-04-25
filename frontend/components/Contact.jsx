const Contact = () => {
    return (
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold text-indigo-400">Contact Us</h1>
          <p className="text-lg text-gray-400">
            We'd love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.
          </p>
  
          <form className="bg-gray-800 p-8 rounded-md shadow-xl space-y-6 max-w-lg mx-auto">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your message"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  