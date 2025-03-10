import React from "react";

const BetterLendingDecisions: React.FC = () => {
  return (
    <div className="w-full bg-[#cadacf] py-12 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full p-6 md:p-8 rounded-lg">
        
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Better lending decisions <br /> with less risk
          </h2>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <span className="bg-green-300 text-gray-900 font-bold w-8 h-8 flex items-center justify-center rounded-full">
                01
              </span>
              <p className="text-lg text-gray-800">Comprehensive loan and credit assessments</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="bg-green-300 text-gray-900 font-bold w-8 h-8 flex items-center justify-center rounded-full">
                02
              </span>
              <p className="text-lg text-gray-800">Borrower behavior analysis for risk mitigation</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="bg-green-300 text-gray-900 font-bold w-8 h-8 flex items-center justify-center rounded-full">
                03
              </span>
              <p className="text-lg text-gray-800">Faster underwriting and application approvals</p>
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="/Loan.png" alt="Lending Process" className="max-w-full h-auto rounded-lg" />
        </div>
      </div>

      <div className="w-full max-w-6xl text-center mt-16">
        <div className="flex items-center justify-center w-full mb-6">
          <hr className="flex-grow border-t border-gray-400 mx-4" />
          <h3 className="text-lg font-semibold tracking-wider text-gray-900 uppercase">
            Why Choose EMA
          </h3>
          <hr className="flex-grow border-t border-gray-400 mx-4" />
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center mt-20 mb-14">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              🎯 
            </div>
            <p className="text-gray-800 text-lg">Above human-level accuracy and efficiency</p>
          </div>
          <div className="flex flex-col items-center mt-6 md:mt-0">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              📄 
            </div>
            <p className="text-gray-800 text-lg">APIs to integrate with internal applications</p>
          </div>
          <div className="flex flex-col items-center mt-6 md:mt-0">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              🔒
            </div>
            <p className="text-gray-800 text-lg">
              Robust compliance and security - SOC2,<br/> ISO 27001, GDPR, and NIST standards
            </p>
          </div>
        </div>
        <button className="mt-8 px-6 py-3 mb-8 bg-green-700 text-white font-semibold text-lg rounded-full shadow-md hover:bg-green-800">
          Hire EMA
        </button>
      </div>
    </div>
  );
};

export default BetterLendingDecisions;
