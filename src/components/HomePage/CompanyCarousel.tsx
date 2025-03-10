import React from "react";

const companyLogos = [
  "/company1.webp",
  "/company2.webp",
  "/company3.webp",
  "/company4.webp",
  "/company5.webp",
  "/company6.webp",
  "/company7.webp",
  "/company8.webp",
  "/company9.webp",
  "/company10.webp",
];

const CompanyCarousel = () => {
  return (
    <div className="relative overflow-hidden w-full py-6 bg-[#d8d7d1]">
      {/* <h2 className="text-2xl font-bold text-center mb-24">
        Enterprise Level Security and Compliance
      </h2> */}

      <div className="carousel-container mt-12 mb-12">
        <div className="carousel-track">
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company ${index % companyLogos.length + 1}`}
              className="carousel-item"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `  
        .carousel-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }
        
        .carousel-track {
          display: flex;
          animation: scroll 15s linear infinite;
          will-change: transform;
        }

        .carousel-item {
          width: 120px;
          height: auto;
          margin: 0 16px;
          object-fit: contain;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <CompanyCarousel />

      <div className="text-center mt-24 mb-16 px-4">
        <p className="text-gray-500 uppercase tracking-widest text-sm">
          CHOOSE EMA’S ROLE TO START
        </p>
        <h2 className="text-3xl font-bold mt-2">
          10X productivity with no additional headcount
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Experience a different level of operational efficiency
        </p>
      </div>
    </div>
  );
};

export default Page;
