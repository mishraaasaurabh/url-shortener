const About = () => {
    return (
      <div className="bg-gray-900 text-white min-h-screen p-8">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold text-indigo-400">About Us</h1>
          <p className="text-lg text-gray-400">
            Welcome to ShortenURL, your go-to platform for easily shortening and sharing links. 
            We aim to provide a fast, reliable, and easy-to-use URL shortening service.
          </p>
  
          <div className="bg-gray-800 p-6 rounded-md shadow-xl">
            <h2 className="text-3xl font-semibold text-indigo-500">Who We Are</h2>
            <p className="mt-4 text-gray-300">
              Our team is passionate about making the internet a more efficient place, one shortened link at a time. 
              We're dedicated to offering you a seamless user experience.
            </p>
          </div>
  
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-indigo-500">Our Mission</h2>
            <p className="mt-4 text-gray-300">
              To make link sharing easier, cleaner, and faster for everyone. We provide fast link shortening with analytics.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  