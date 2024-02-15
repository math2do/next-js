"use client";
import React, { useState, useEffect } from "react";
import { faTerminal, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Navbar = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setExpandMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section className="mx-auto max-w-6xl">
      <nav className="flex items-center justify-between rounded-md p-4">
        {/* logo */}

        <Link href="/math2do">
          <div className="flex cursor-pointer items-center">
            <FontAwesomeIcon
              className="text-primary-700 h-6 font-extrabold"
              icon={faTerminal}
            />

            <h1 className="text-2xl font-bold shadow-black drop-shadow-2xl">
              <span className="text-primary-700 capitalize">math</span>
              <span>2do</span>
            </h1>
          </div>
        </Link>

        {/* expland button  */}
        <FontAwesomeIcon
          className={`${expandMenu ? null : "rotate-180"} text-primary-700 h-6 cursor-pointer p-2 font-bold transition-all duration-300 hover:rounded-full hover:bg-gray-300 md:hidden`}
          onClick={() => {
            setExpandMenu(!expandMenu);
          }}
          icon={faChevronDown}
        />

        {/* navigation menus */}
        <ul
          className={`hidden gap-x-6 text-sm font-semibold text-gray-500 md:flex md:justify-between`}
        >
          <Link href="/math2do">
            <li className="hover:underlined cursor-pointer uppercase tracking-wider transition duration-500">
              Home
            </li>
          </Link>
          <li className="hover:underlined cursor-pointer uppercase tracking-wider transition duration-500">
            Projects
          </li>
          <li className="hover:underlined cursor-pointer uppercase tracking-wider transition duration-500">
            Portfolio
          </li>
          <li className="hover:underlined cursor-pointer uppercase tracking-wider transition duration-500">
            About
          </li>
          <li className="hover:underlined cursor-pointer uppercase tracking-wider transition duration-500">
            Contact
          </li>
        </ul>

        <button className="border-primary-700 text-primary-900 hover:bg-primary-700 hidden rounded-md border-2 px-6 py-0.5 tracking-widest transition duration-300 hover:text-white md:inline-block">
          Login
        </button>
      </nav>

      {/* expanded menu in mobile */}
      <ul
        className={`${expandMenu ? null : "hidden"} h-lvh w-full space-y-4 py-4 text-center text-sm font-semibold text-gray-500`}
      >
        <li className="hover:bg-primary-100 cursor-pointer py-3 uppercase tracking-wider transition duration-500 hover:translate-x-2">
          Home
        </li>
        <li className="hover:bg-primary-100 cursor-pointer py-3 uppercase tracking-wider transition duration-500 hover:translate-x-2">
          Projects
        </li>
        <li className="hover:bg-primary-100 cursor-pointer py-3 uppercase tracking-wider transition duration-500 hover:translate-x-2">
          Portfolio
        </li>
        <li className="hover:bg-primary-100 cursor-pointer py-3 uppercase tracking-wider transition duration-500 hover:translate-x-2">
          About
        </li>
        <li className="hover:bg-primary-100 cursor-pointer py-3 uppercase tracking-wider transition duration-500 hover:translate-x-2">
          Contact
        </li>
      </ul>
      <div className="h-[0.5px] bg-gray-200"></div>
    </section>
  );
};

export default Navbar;
