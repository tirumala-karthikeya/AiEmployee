import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface CardProps {
  title: string;
}

const AIWorkForce = () => {
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState<number>(0);
  const [rightHeight, setRightHeight] = useState<number>(0);
  
  // Define all the roles as requested
  const leftContent = [
    "Sales Development Representative",
    "Sales Data Analyst",
    "Clinician Assistant",
    "Recruiting Specialist",
    "Sales Intelligence",
    "AI Support Agent"
  ];
  
  const rightContent = [
    "Proposal Writer",
    "Legal Assistant",
    "Onboarding Assistant",
    "Agentic AI Chatbot",
    "Contracts Analyzer",
    "Claims Assessment",
    "Proposal Writer"
  ];
  
  // Get icons based on role name
  const getIcon = (title: string): string => {
    if (title.includes("Sales")) return "📈";
    if (title.includes("Data")) return "📊";
    if (title.includes("Recruiting")) return "👥";
    if (title.includes("Legal")) return "⚖️";
    if (title.includes("Proposal")) return "📝";
    if (title.includes("Clinician")) return "🩺";
    if (title.includes("Onboarding")) return "🚀";
    if (title.includes("Chatbot")) return "💬";
    if (title.includes("Contracts")) return "📑";
    if (title.includes("Claims")) return "🔍";
    if (title.includes("Support")) return "🛠️";
    if (title.includes("Intelligence")) return "🧠";
    return "✨";
  };

  // Measure the height of each column after render to set up the animation properly
  useEffect(() => {
    if (leftContentRef.current) {
      setLeftHeight(leftContentRef.current.scrollHeight / 2);
    }
    if (rightContentRef.current) {
      setRightHeight(rightContentRef.current.scrollHeight / 2);
    }
  }, []);

  // Create a card component
  const Card = ({ title }: CardProps) => (
    <div className="p-5 m-2 bg-white rounded-xl shadow-md border border-gray-50">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
          <span className="text-lg">{getIcon(title)}</span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-2">
        <div className="h-2 bg-gray-100 rounded w-4/5"></div>
        <div className="h-2 bg-gray-100 rounded w-3/5"></div>
      </div>
    </div>
  );

  return (
    <div className="w-full py-16 px-6 md:px-12 bg-[#f7f6f2]">
     
      <div className="text-center mb-12">
        <h3 className="text-green-600 font-medium tracking-wide uppercase mb-2">WHY HIRE EMA</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Multiply your workforce<br />in minutes
        </h1>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        <div className="w-full md:w-2/5">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 mr-4 text-green-600">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" fill="none" />
                <path d="M30,50 L45,65 L70,35" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Simple</h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-6">
            With its Generative Workflow Engine™ and pre-built library of agents, Ema conversationally activates 
            new AI employees to execute any complex workflow in the enterprise. Pre-integrated with hundreds of 
            apps, Ema is easy to configure and deploy.
          </p>
          
          <button className="bg-black hover:bg-gray-800 text-white py-3 px-8 rounded-full font-medium">
            Explore integrations
          </button>
        </div>
        
        <div className="w-full md:w-3/5 flex overflow-hidden h-96">
       
          <div className="w-1/2 overflow-hidden relative h-full">
            <motion.div 
              ref={leftContentRef}
              className="absolute w-full"
              animate={{ 
                y: [0, -leftHeight]
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear"
                }
              }}
            >
              {[...leftContent, ...leftContent].map((item, index) => (
                <Card key={`left-${index}`} title={item} />
              ))}
            </motion.div>
          </div>
          
          <div className="w-1/2 overflow-hidden relative h-full">
            <motion.div
              ref={rightContentRef}
              className="absolute w-full"
              animate={{ 
                y: [-rightHeight, 0]
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear"
                }
              }}
            >
              {[...rightContent, ...rightContent].map((item, index) => (
                <Card key={`right-${index}`} title={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkForce;