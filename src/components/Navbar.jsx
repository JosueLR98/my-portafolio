import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Introducción", link: "#intro" },
    { name: "Habilidades", link: "#skills" },
    { name: "Proyectos", link: "#projects" },
    { name: "Contacto", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={` fixed w-full right-0  z-[999] ${
        sticky ? "bg-white/50  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-end">
        <div
          className={` ${
            sticky ? "sm:bg-white/0 bg-white" : "bg-white"
          } text-black sm:block hidden  font-medium  rounded-bl-2xl`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[100]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-4xl sm:hidden mt-1`}
        >
          <i className="bx bx-menu-alt-left text-cyan-600"></i>
        </div>
        <div
          className={`sm:hidden text-gray-900 absolute w-40 h-screen
      px-7 py-2 font-medium bg-gray-300 dark:bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-3/4 gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-red-400"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
