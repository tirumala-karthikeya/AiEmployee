const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700 text-white py-24 px-12 font-['Open_Sans']">
      <div className="max-w-6xl mr-24 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <span className="text-3xl font-extrabold">Ema</span>
          </div>

          <button className="mt-8 border border-white text-white px-6 py-3 text-lg rounded-full hover:bg-white hover:text-green-700 transition">
            ask@ema.co
          </button>

          <p className="mt-8 text-lg">
            147 Castro St, Suite 2 <br />
            Mountain View, CA 94041
          </p>

          <a href="#" className="mt-2 text-lg underline hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
        <div className="grid grid-cols-1 ml-20 sm:grid-cols-2 lg:grid-cols-3 gap-6 col-span-3">
         
          <div>
            <h3 className="font-extrabold text-xl">Solutions</h3>
            <ul className="mt-2 space-y-4 text-lg">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Data Professional</a></li>
              <li><a href="#">Employee Assistant</a></li>
              <li><a href="#">Pharmacist Assistant</a></li>
              <li><a href="#">Proposal Manager</a></li>
              <li><a href="#">Compliance Analyst</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-xl">Resources</h3>
            <ul className="mt-2 space-y-4 text-lg">
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Videos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-xl">Company</h3>
            <ul className="mt-2 space-y-4 text-lg">
              <li><a href="#">About</a></li>
              <li><a href="#">Join the team</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Our Advisors</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
