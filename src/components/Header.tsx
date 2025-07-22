import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";



function Header() {
  return (
    <nav className="p-1 w-full h-20 flex justify-center items-center sticky bg-[#180139] z-10 top-0">
      {/* <h1 className="text-white">Techman</h1> */}
      <main className="w-[70%] flex justify-center gap-3">
        <NavLink className={({isActive})=> isActive? "text-white m-1 poppins-regular cursor-pointer bg-[#fa0890] rounded-lg px-2 py-1":"text-white m-1 hover:text-[#fa0890] poppins-regular cursor-pointer rounded-lg px-2 py-1"} to="/">Home</NavLink>
        <NavLink className={({isActive})=> isActive? "text-white m-1 poppins-regular cursor-pointer bg-[#fa0890] rounded-lg px-2 py-1":"text-white m-1 hover:text-[#fa0890] poppins-regular cursor-pointer rounded-lg px-2 py-1"} to="/contact">Contact</NavLink>
        <ScrollLink className="text-white m-1 hover:text-[#fa0890] poppins-regular cursor-pointer rounded-lg px-2 py-1" to="about" smooth={true} duration={600}>About</ScrollLink>
        <ScrollLink className="text-white m-1 hover:text-[#fa0890] poppins-regular cursor-pointer rounded-lg px-2 py-1" to="brands" smooth={true} duration={500}>Brands</ScrollLink>
        <NavLink className={({isActive})=> isActive? "text-white m-1 poppins-regular cursor-pointer bg-[#fa0890] rounded-lg px-2 py-1":"text-white m-1 hover:text-[#fa0890] poppins-regular cursor-pointer rounded-lg px-2 py-1"} to="/services">Services</NavLink>
        
      </main>
    </nav>
  )
}

export default Header