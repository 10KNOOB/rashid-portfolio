import React, { useState } from "react";
import "./navbar.css";
import { FaChevronCircleDown, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about-me",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="nav flex justify-center items-center w-full h-14 px-4 fixed">
      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-text px-10 cursor-pointer capitalize hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer justify-end pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaChevronCircleDown size={30} />}
      </div>

      {nav && (
        <ul className="nav-res flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
