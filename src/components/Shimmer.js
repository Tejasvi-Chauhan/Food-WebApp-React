import React from 'react';

const ShimmerCard = () => {
  // Hum 10 empty cards dikhayenge loading ke time
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {Array(10).fill("").map((e, index) => (
        <div 
          key={index} 
          className="w-64 h-80 p-4 border border-gray-200 rounded-2xl shadow-sm bg-white"
        >
          <div className="animate-pulse space-y-4">
            
            {/* Shimmer Image */}
            <div className="bg-gray-200 h-40 w-full rounded-lg"></div>
            
            {/* Shimmer Content */}
            <div className="space-y-2">
              {/* Title Line */}
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              
              {/* Rating/Cuisine Line */}
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              
              {/* Address/Time Line */}
              <div className="h-3 bg-gray-200 rounded w-full"></div>
            </div>
            
             {/* Bottom Button Placeholder */}
             <div className="h-8 bg-gray-100 rounded w-full mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;