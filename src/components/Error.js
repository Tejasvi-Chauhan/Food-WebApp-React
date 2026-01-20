import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err); // Developer debugging ke liye

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      
      {/* 1. Big Animated Icon or Emoji */}
      <div className="text-9xl mb-4 animate-bounce">
        😵
      </div>

      {/* 2. Error Titles */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
        Oops! Something Went Wrong
      </h1>
      
      <h3 className="text-xl text-red-500 font-semibold mb-6">
        {/* Agar status nahi mila to default text dikhayega */}
        {err?.status ? `${err.status} : ${err.statusText}` : "Unexpected Error"}
      </h3>

      {/* 3. Detailed Error Message (Optional - Small Text) */}
      <p className="text-gray-500 mb-8 max-w-md text-center">
        {err?.data || "Lagta hai rasta bhatak gaye ho ya server so gaya hai."}
      </p>

      {/* 4. Back to Home Button (Bahut Zaruri hai) */}
      <Link 
        to="/" 
        className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:scale-105"
      >
        Go Back to Home
      </Link>
      
    </div>
  );
};

export default Error;