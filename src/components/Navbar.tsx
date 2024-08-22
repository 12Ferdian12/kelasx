"use client";

import Link from "next/link";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
    // console.log(currentScrollPos, prevScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <nav
      className={`z-50 flex
      transition ease-in-out duration-500
      bg-white flex-col border-b-2  border-black h-[99px]`}
    >
      <div className=" flex p-4 justify-centers items-centers">
        <div className="pl-[25px]">
          <Link href="/">
            <img
              src="./img/Logo.jpeg"
              className=" w-[38x] h-[67px]"
              alt="Techinovators"
            />
          </Link>
        </div>
        <div className="mx-auto w-[500px] items-center flex p-4">
          <div>
            {/* <button
            className="lg:hidden flex items-center px-3 py-2 text-black border-black hover:text-Yellow hover:border-Yellow"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            >
            {navbarOpen ? (
              <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
                )}
                </button> */}
            <button
              className="lg:hidden flex flex-col h-12 w-12  justify-center items-center group"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  navbarOpen
                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  navbarOpen
                    ? "opacity-0"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  navbarOpen
                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
            <ul
              className={`hidden lg:flex items-center justify-between`}
              data-aos="fade-down"
            >
              <li className="mx-2">
                <a
                  href={"/#about"}
                  className="border-2 rounded-2xl px-1 py-1 border-transparent text-Jeruk hover:text-black hover:bg-Jeruk hover:border-Jeruk  font-bold text-base transition ease-in-out duration-500"
                >
                  Home
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="/#product"
                  className="border-2 rounded-2xl px-1 py-1 border-transparent text-Jeruk hover:text-black hover:bg-Jeruk hover:border-Jeruk  font-bold text-base transition ease-in-out duration-500"
                >
                  Gallery
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="/#product"
                  className="border-2 rounded-2xl px-1 py-1 border-transparent text-Jeruk hover:text-black hover:bg-Jeruk hover:border-Jeruk  font-bold text-base transition ease-in-out duration-500"
                >
                  Structure
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="/#product"
                  className="border-2 rounded-2xl px-1 py-1 border-transparent text-Jeruk hover:text-black hover:bg-Jeruk hover:border-Jeruk  font-bold text-base transition ease-in-out duration-500"
                >
                  About
                </a>
              </li>
              <li className="mx-2  ">
                <Link
                  href="/Tutorial"
                  className="border-2 rounded-2xl px-1 py-1 border-transparent text-Jeruk hover:text-black hover:bg-Jeruk hover:border-Jeruk  font-bold text-base transition ease-in-out duration-500"
                >
                  Journey
                </Link>
              </li>{" "}
              {/* <li className="mx-2 border-2 w-[85px] h-[40px] bg-Yellow border-black  rounded-full flex justify-center items-center ">
              <Link
              href="/Challenge"
              className="hover:border-b-2 text-black hover:border-black font-bold text-base transition ease-in-out duration-500"
              >
              Challenge
              </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* create me menu with vertical when humberger menu open */}
      <ul
        className={`${
          navbarOpen ? "flex" : "hidden"
        } lg:hidden flex-col items-center justify-center w-full bg-Brown2 h-full transition ease-in-out duration-500 space-y-5 py-5 z-50`}
      >
        <li className="mx-2">
          <a
            href={"/#about"}
            className="hover:border-b-2 text-Yellow hover:border-Yellow px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-500"
          >
            About
          </a>
        </li>
        <li className="mx-2">
          <a
            href="/#product"
            className="hover:border-b-2 text-Yellow hover:border-Yellow px-[4px] py-[3px] font-bold text-base transition ease-in-out duration-500"
          >
            Product
          </a>
        </li>
        <li className="mx-2 border-2 w-[85px] h-[40px] bg-Yellow border-black  rounded-full flex justify-center items-center ">
          <Link
            href="/Tutorial"
            className="hover:border-b-2 text-black hover:border-black font-bold text-base transition ease-in-out duration-500"
          >
            Tutorial
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
