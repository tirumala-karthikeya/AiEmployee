import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); 
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileDropdown(null);
    }
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 py-4 px-4 sm:px-8 flex justify-between items-center z-50">

      <div className="flex items-center gap-2 ml-2 sm:ml-8">
        <div className="w-8 h-8 bg-green-600 rounded-full"></div>
        <span className="text-xl font-bold text-gray-900">Ema</span>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        <div className="relative group">
          <div
            className="flex items-center gap-1 text-gray-900 hover:text-green-600 cursor-pointer"
            onMouseEnter={() => handleMouseEnter("Products")}
            onMouseLeave={handleMouseLeave}
          >
            Products <ChevronDown size={16} />
          </div>

          <div
            className={`absolute left-0 mt-2 w-[34rem] bg-white shadow-lg rounded-lg px-8 py-4 z-50 ${
              openDropdown === "Products" ? "block" : "hidden"
            }`}
            onMouseEnter={() => handleMouseEnter("Products")}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="text-gray-500 uppercase text-sm font-bold">
              Build AI Employee
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
              >
                🛠 AI Employee Builder (GWE™)
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-400"
              >
                🟢 Custom Agents
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
              >
                🔄 EmaFusion™
              </a>
            </div>
            <hr className="my-3 border-gray-300" />

            <h3 className="text-gray-500 uppercase text-sm font-bold">
              Hire AI Employee
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-400"
              >
                📈 Knowledge Insights
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
              >
                📄 Document Generation
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
              >
                📊 Document Analysis and Insights
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 text-gray-400"
              >
                🤖 Agentic Business Automation
              </a>
            </div>

            <hr className="my-3 border-gray-300" />
            <h3 className="text-gray-500 uppercase text-sm font-bold">
              Trust & Security
            </h3>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              🔒 Trust and Security
            </a>
          </div>
        </div>

        <div className="relative group">
          <div
            className="flex items-center gap-1 text-gray-900 hover:text-green-600 cursor-pointer"
            onMouseEnter={() => handleMouseEnter("Solutions")}
            onMouseLeave={handleMouseLeave}
          >
            Solutions <ChevronDown size={16} />
          </div>

          <div
            className={`absolute left-0 mt-2 w-[34rem] bg-white shadow-lg rounded-lg px-6 py-4 z-50 ${
              openDropdown === "Solutions" ? "block" : "hidden"
            }`}
            onMouseEnter={() => handleMouseEnter("Solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <h3 className="text-gray-500 uppercase text-sm font-bold flex items-center gap-2">
              🧑‍💻 All AI Employees
            </h3>

            <hr className="my-3 border-gray-300" />
            <h3 className="text-gray-500 uppercase text-sm font-bold">
              By Use Case
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200"
              >
                🤖 Customer Support
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200"
              >
                📄 Employee Experience
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200"
              >
                📊 Sales & Marketing
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200"
              >
                ⚖️ Legal & Compliance
              </a>
            </div>

            <hr className="my-3 border-gray-300" />

            <h3 className="text-gray-500 uppercase text-sm font-bold">
              By Industry
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200"
              >
                🏥 Healthcare
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200"
              >
                💰 Insurance
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200"
              >
                📈 Fintech
              </a>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div
            className="flex items-center gap-1 text-gray-900 hover:text-green-600 cursor-pointer"
            onMouseEnter={() => handleMouseEnter("Resources")}
            onMouseLeave={handleMouseLeave}
          >
            Resources <ChevronDown size={16} />
          </div>

          <div
            className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg px-6 py-4 z-50 ${
              openDropdown === "Resources" ? "block" : "hidden"
            }`}
            onMouseEnter={() => handleMouseEnter("Resources")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              📖 Blogs
            </a>
            <hr className="my-3 border-gray-300" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              📰 Newsletter
            </a>
            <hr className="my-3 border-gray-300" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              📹 Product Videos
            </a>
            <hr className="my-3 border-gray-300" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              🌟 Customer Stories
            </a>
            <hr className="my-3 border-gray-300" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              📜 White Paper
            </a>
            <hr className="my-3 border-gray-300" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              📊 Analyst Report
            </a>
          </div>
        </div>

        <div className="relative group">
          <div
            className="flex items-center gap-1 text-gray-900 hover:text-green-600 cursor-pointer"
            onMouseEnter={() => handleMouseEnter("Company")}
            onMouseLeave={handleMouseLeave}
          >
            Company <ChevronDown size={16} />
          </div>

          <div
            className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg px-6 py-4 z-50 ${
              openDropdown === "Company" ? "block" : "hidden"
            }`}
            onMouseEnter={() => handleMouseEnter("Company")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              🏢 About
            </a>
            <hr className="my-3 border-gray-300" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              🚀 Join the Team
            </a>
            <hr className="my-3 border-gray-300" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              🗞 News
            </a>
            <hr className="my-3 border-gray-300" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
            >
              🎓 Our Advisors
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700">
          Hire Ema
        </button>

        <button 
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">Ema</span>
            </div>
            <button 
              className="text-gray-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <X size={24} />
            </button>
          </div>
          <div className="space-y-6">
            <div>
              <div 
                className="flex justify-between items-center py-2 border-b border-gray-200"
                onClick={() => toggleMobileDropdown("Products")}
              >
                <span className="text-lg font-medium">Products</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${
                    mobileDropdown === "Products" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className={`mt-2 space-y-2 pl-4 ${mobileDropdown === "Products" ? "block" : "hidden"}`}>
                <h3 className="text-gray-500 uppercase text-sm font-bold mt-4">Build AI Employee</h3>
                <a href="#" className="block py-2">🛠 AI Employee Builder (GWE™)</a>
                <a href="#" className="block py-2 text-gray-400">🟢 Custom Agents</a>
                <a href="#" className="block py-2">🔄 EmaFusion™</a>
                
                <h3 className="text-gray-500 uppercase text-sm font-bold mt-4">Hire AI Employee</h3>
                <a href="#" className="block py-2 text-gray-400">📈 Knowledge Insights</a>
                <a href="#" className="block py-2">📄 Document Generation</a>
                <a href="#" className="block py-2">📊 Document Analysis and Insights</a>
                <a href="#" className="block py-2 text-gray-400">🤖 Agentic Business Automation</a>
                
                <h3 className="text-gray-500 uppercase text-sm font-bold mt-4">Trust & Security</h3>
                <a href="#" className="block py-2">🔒 Trust and Security</a>
              </div>
            </div>

            <div>
              <div 
                className="flex justify-between items-center py-2 border-b border-gray-200"
                onClick={() => toggleMobileDropdown("Solutions")}
              >
                <span className="text-lg font-medium">Solutions</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${
                    mobileDropdown === "Solutions" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className={`mt-2 space-y-2 pl-4 ${mobileDropdown === "Solutions" ? "block" : "hidden"}`}>
                <h3 className="text-gray-500 uppercase text-sm font-bold mt-2">🧑‍💻 All AI Employees</h3>
                
                <h3 className="text-gray-500 uppercase text-sm font-bold mt-4">By Use Case</h3>
                <a href="#" className="block py-2">🤖 Customer Support</a>
                <a href="#" className="block py-2">📄 Employee Experience</a>
                <a href="#" className="block py-2">📊 Sales & Marketing</a>
                <a href="#" className="block py-2">⚖️ Legal & Compliance</a>
                
                <h3 className="text-gray-500 uppercase text-sm font-bold mt-4">By Industry</h3>
                <a href="#" className="block py-2">🏥 Healthcare</a>
                <a href="#" className="block py-2">💰 Insurance</a>
                <a href="#" className="block py-2">📈 Fintech</a>
              </div>
            </div>

          
            <div>
              <div 
                className="flex justify-between items-center py-2 border-b border-gray-200"
                onClick={() => toggleMobileDropdown("Resources")}
              >
                <span className="text-lg font-medium">Resources</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${
                    mobileDropdown === "Resources" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className={`mt-2 space-y-2 pl-4 ${mobileDropdown === "Resources" ? "block" : "hidden"}`}>
                <a href="#" className="block py-2">📖 Blogs</a>
                <a href="#" className="block py-2">📰 Newsletter</a>
                <a href="#" className="block py-2">📹 Product Videos</a>
                <a href="#" className="block py-2">🌟 Customer Stories</a>
                <a href="#" className="block py-2">📜 White Paper</a>
                <a href="#" className="block py-2">📊 Analyst Report</a>
              </div>
            </div>

            <div>
              <div 
                className="flex justify-between items-center py-2 border-b border-gray-200"
                onClick={() => toggleMobileDropdown("Company")}
              >
                <span className="text-lg font-medium">Company</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${
                    mobileDropdown === "Company" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div className={`mt-2 space-y-2 pl-4 ${mobileDropdown === "Company" ? "block" : "hidden"}`}>
                <a href="#" className="block py-2">🏢 About</a>
                <a href="#" className="block py-2">🚀 Join the Team</a>
                <a href="#" className="block py-2">🗞 News</a>
                <a href="#" className="block py-2">🎓 Our Advisors</a>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 mt-4">
              Hire Ema
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;