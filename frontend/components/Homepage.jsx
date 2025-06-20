import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios"

const HomePage = () => {

    const [input, setinput] = useState("");
    const [newurl, setnewurl] = useState("Your new Link will appear Here");
    const [loading,setloading] = useState(false)

    const getshorturl = () => {
        if (!input.length) {
            return toast.error("Provide a valid link", {
                duration: 1000
            })
        }
        else {

            axios.post(import.meta.env.VITE_DOMAIN_NAME + "/create-url", {
                oldurl: input
            })
                .then(({ data, data: { newurl } }) => {
                    // console.log(data);
                    setnewurl(newurl)
                    toast.success("Your New URL is Ready",{
                        duration: 1000
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        }


    }

    return (
        <>
            {/* Header */}
            <header className="bg-gray-900 shadow-lg p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-center">
                    <h1 className="text-3xl font-bold text-indigo-400 tracking-tight">
                        🔗 ShortenURL
                    </h1>

                </div>
            </header>

            {/* URL Shortener Box */}
            <div className="flex flex-col justify-center items-center bg-gray-800 mt-10 mx-4 h-150 shadow-2xl shadow-black rounded-xl border border-gray-700 space-y-4 p-6 text-white">
                <p className="text-xl font-semibold">Paste your Link here</p>

                <input
                    type="text"
                    placeholder="Enter a URL to shorten"
                    className="w-full max-w-md px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => {
                        setinput(e.target.value)
                    }}
                />

                <button className="bg-indigo-600  hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md transition"
                    onClick={getshorturl}
                >
                   <span>Shorten</span> 
                </button>

                <div className="bg-gray-800 px-6 py-5 rounded-lg shadow-lg border border-gray-700 text-sm w-full max-w-md mx-auto text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <a
                            href={newurl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold transition duration-200"
                        >
                            New Link
                        </a>
                        <span className="text-blue-200 text-base break-all">{newurl}</span>
                    </div>
                </div>

                <footer className="mt-10 text-center text-sm text-gray-400">
                    Made with ❤️ by <a href="https://www.linkedin.com/in/saurabh-mishra-24a874256/  " target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Saurabh</a>
                </footer>


            </div>

        </>
    );
};

export default HomePage;
