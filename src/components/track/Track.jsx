import React from 'react';

const Track = () => {
  const features = [
    {
      title: "Order Tracking",
      description: "Track your orders in real-time from purchase to delivery.",
      iconColor: "text-orange-500",
      shadowColor: "rgba(251, 191, 36, 0.4)", // amber-400
    },
    {
      title: "Secure Payments",
      description: "All payments are encrypted and secured for your safety.",
      iconColor: "text-green-500",
      shadowColor: "rgba(74, 222, 128, 0.4)", // green-400
    },
    {
      title: "Fast Delivery",
      description: "Experience lightning-fast delivery with real-time updates.",
      iconColor: "text-purple-500",
      shadowColor: "rgba(192, 132, 252, 0.4)", // purple-400
    }
  ];

  return (
    <section>
      <div className="container mx-auto px-5 py-10 md:py-14">
        <div className="flex flex-wrap -m-4 text-center">
          {features.map((item, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 border-gray-200 bg-white px-4 py-6 rounded-lg transition duration-300 hover:scale-[1.02]"
                style={{
                  boxShadow: `0 4px 15px ${item.shadowColor}`,
                }}
              >
                <svg
                  className={`${item.iconColor} w-12 h-12 mb-3 inline-block`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993
                    l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 
                    01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 
                    0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 
                    11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 
                    11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <h2 className="title-font font-semibold text-lg text-gray-900">{item.title}</h2>
                <p className="leading-relaxed text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Track;
