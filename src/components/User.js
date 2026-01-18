import React from 'react';

const User = (props) => {
  // Agar props se data nahi aaye to ye default values dikhengi (jo tumne hardcode ki thi)
  const {
    Name = props.Name || "Unknown User",
    Location = "Delhi, India",
    Contact = "+91 1234567890",
    Profession = "Senior Developer",
    Company = "Microsoft",
    Experience = "5 Years"
  } = props;

  return (
    <div className="flex justify-center items-center p-6 bg-gray-50">
      <div className="bg-white max-w-sm w-full rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        
        {/* --- Card Header (Gradient & Image) --- */}
        <div className="relative h-32 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <img 
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover bg-white"
              src={`https://ui-avatars.com/api/?name=${Name}&background=random&size=128`} 
              alt={Name} 
            />
          </div>
        </div>

        {/* --- Card Body --- */}
        <div className="pt-14 pb-8 px-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">{Name}</h1>
          <p className="text-indigo-600 font-medium text-sm mb-4">{Profession} @ {Company}</p>

          <hr className="my-4 border-gray-200" />

          {/* --- Details Section --- */}
          <div className="space-y-3 text-left">
            
            {/* Location */}
            <div className="flex items-center gap-3 text-gray-600">
              <span className="bg-blue-50 p-2 rounded-full text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="text-sm font-medium">{Location}</span>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-3 text-gray-600">
              <span className="bg-purple-50 p-2 rounded-full text-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-sm font-medium">Exp: {Experience}</span>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3 text-gray-600">
              <span className="bg-green-50 p-2 rounded-full text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span className="text-sm font-medium">{Contact}</span>
            </div>

          </div>

          {/* Action Button */}
          <button className="w-full mt-6 bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition active:scale-95">
            Connect
          </button>

        </div>
      </div>
    </div>
  );
};

export default User;