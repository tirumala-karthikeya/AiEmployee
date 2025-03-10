const HeroSection = () => {
    return (
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-8 font-sans mt-52 ">
   
        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center text-center md:text-left gap-8">
          
          <div className="w-full md:w-1/2 space-y-6 flex flex-col items-center md:items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              One AI Employee to Reshape Financial Services
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl">
              Transform financial services processes across every function with Agentic AI.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700">
              Hire Ema
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/Hero.png" alt="AI Financial Assistant" className="w-full max-w-xs sm:max-w-sm md:max-w-lg" />
          </div>
        </div>

        <div className="w-full py-12 mt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center">
                🔄 
              </div>
              <p className="text-gray-800 text-lg mt-4">
                One platform to automate <br /> many workflows
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center">
                🛡️
              </div>
              <p className="text-gray-800 text-lg mt-4">
                Compliant with leading <br /> industry standards
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center">
                🎯 
              </div>
              <p className="text-gray-800 text-lg mt-4">
                Above human-level accuracy
              </p>
            </div>

          </div>
        </div>
      </section>
    );
};

export default HeroSection;
