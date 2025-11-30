import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = ({ isOpen, isVisible, setIsVisible }) => {
  const isShown = !isOpen && !isVisible;
  const location = useLocation(); 

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contactus", label: "Contact Us" },
  ];

  return (
    <motion.div
      initial={false}
      animate={{
        height: isShown ? "250px" : "0px",
        opacity: isShown ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden mt-10 bg-slate-900 z-[400] absolute text-white w-full left-0"
    >
      <div className="flex flex-col h-[250px]">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsVisible(!isVisible)}
              className={`h-full border-b-gray-700 border-b-2 flex items-center ${
                isActive ? "bg-slate-800" : "bg-gray-900"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Menu;
