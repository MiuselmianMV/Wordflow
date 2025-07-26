import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#9feabb]">
      <h1 className="text-2xl font-extrabold">
        <Link to="/">        
          <span className="text-green-800">WORD</span>
          <span className="text-black">FLOW</span>
        </Link>
      </h1>
      <div className="space-x-30 flex justify-end-safe items-end-safe pr-10">
   
        <div className="">
          <Link to="/" className="py-5 text-[#f0f0f0] border-0 hover:font-bold hover:border-b-2 ">Home</Link>
        </div>

        <div className="">
          <Link to="/courses" className="py-5 text-[#f0f0f0] border-0 hover:font-bold hover:border-b-2 ">Courses</Link>
        </div>
   
        <div className="">
          <Link to="/contact" className="py-5 text-[#f0f0f0] border-0 hover:font-bold hover:border-b-2 ">Contact</Link>
        </div>
        
        <div className="">
          <Link to="/login" className="py-5 text-[#f0f0f0] border-0 hover:font-bold hover:border-b-2 ">Login</Link>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;