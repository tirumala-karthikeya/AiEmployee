import React, { useEffect, useState, useRef } from 'react';

const TrustComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset visibility when scrolling away
          setIsVisible(false);
        }
      });
    }, options);

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Badge data with fixed positions
  const badges = [
    { id: 1, src: "/company1.webp", alt: "ISO 27001 Certification", position: "top" },
    { id: 2, src: "/company2.webp", alt: "NIST 800-171 Badge", position: "left" },
    { id: 3, src: "/company3.webp", alt: "NIST AI RMF Badge", position: "right" },
    { id: 4, src: "/company4.webp", alt: "NIST CSF Badge", position: "bottom-right" },
    { id: 5, src: "/company5.webp", alt: "SOC 2 Badge", position: "bottom-left" },
    { id: 6, src: "/company6.webp", alt: "GDPR Badge", position: "bottom" },
  ];

  return (
    <div 
      ref={componentRef} 
      className="flex flex-col lg:flex-row items-center justify-between py-20 px-4 md:px-8 bg-[#f7f6f2]"
    >
      <div className="relative w-full lg:w-1/2 flex items-center justify-center mb-16 lg:mb-0">
        
        <div className="relative h-96 w-96 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
              <div className="w-56 h-56 border-4 border-green-500 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-green-500 rounded-full relative overflow-hidden flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full absolute right-4 bottom-6"></div>
                </div>
              </div>
            </div>
          </div>
          
          {badges.map((badge, index) => {
            let positionStyles: React.CSSProperties = {};
            
            switch(badge.position) {
              case "top": 
                positionStyles = { top: "0", left: "50%", transform: "translateX(-50%)" };
                break;
              case "left": 
                positionStyles = { left: "0", top: "50%", transform: "translateY(-50%)" };
                break;
              case "right": 
                positionStyles = { right: "0", top: "50%", transform: "translateY(-50%)" };
                break;
              case "bottom-right": 
                positionStyles = { right: "60px", bottom: "60px" };
                break;
              case "bottom-left": 
                positionStyles = { left: "60px", bottom: "60px" };
                break;
              case "bottom": 
                positionStyles = { bottom: "0", left: "50%", transform: "translateX(-50%)" };
                break;
              default:
                positionStyles = {};
            }
            
            return (
              <div 
                key={badge.id}
                className="absolute transition-all duration-500"
                style={{
                  ...positionStyles,
                  opacity: isVisible ? 1 : 0,
                  transform: `${positionStyles.transform || ''} scale(${isVisible ? 1 : 0})`,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-1">
                  <img src={badge.src} alt={badge.alt} className="w-full h-full object-contain" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 text-left px-4 lg:pl-12">
        <div className="flex items-center mb-6">
          <div className="mr-3">
            <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3,12 L7,16 L21,6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-4xl font-bold">Trusted</h2>
        </div>
        
        <p className="text-lg mb-8 max-w-lg">
          Ema's data governance redacts sensitive information before passing it to public LLMs. 
          Enjoy compliance with all leading standards and get unbeatable security with top-tier 
          encryption and customizable, private models.
        </p>
        
        <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
          Read our trust report
        </button>
      </div>
    </div>
  );
};

export default TrustComponent;