import React from 'react';

const AccurateComponent = () => {
  return (
    <div className="flex flex-col w-full">
    
      <div className="flex flex-col md:flex-row p-6 max-w mx-auto gap-8 items-center py-16 bg-[#f7f6f2]">
        
        <div className="w-full md:w-1/2 ml-24">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 mr-4 text-green-600">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold">Accurate</h2>
          </div>
          
          <p className="text-lg leading-relaxed">
            Ema maximizes accuracy at the lowest possible cost, 
            thanks to 2T+ parameter proprietary EmaFusion™ 
            model that intelligently blends the best public and 
            private models. Plus, Ema is future proof - she's 
            constantly adding new models to avoid over 
            reliance on one technology stack.
          </p>
          
          <button className="mt-8 bg-black text-white px-6 py-3 rounded-full font-medium">
            Know more
          </button>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img 
            src="/LLM.png" 
            alt="EmaFusion network diagram showing connections between models like GPT-4o, Llama 3.1, Gemini 1.5, Claude 3.5, Mistral, BYOM*, and Private LLMs" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full bg-[#f7f6f2] py-16 px-6">
       
        <div className="w-full md:w-1/2 ml-24 md:pr-8">
          <p className="text-green-600 text-2xl font-medium mb-2">Ema</p>
          <h1 className="text-5xl font-bold leading-tight mb-8">
            Your Universal AI<br />Employee
          </h1>
          <button className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg">
            Hire Ema today
          </button>
        </div>
        
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-green-600 rounded-full flex items-center justify-center overflow-hidden">
              
              <div className="absolute inset-0 opacity-30">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white rounded-full"
                    style={{ width: `${100 - i * 5}%`, height: `${100 - i * 5}%` }}
                  />
                ))}
              </div>
              
              <div className="text-white text-center px-8 text-3xl font-medium leading-tight">
                Reimagine the<br />future of work<br />with us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccurateComponent;