"use client";
import { FC, useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {}
const Header: FC<HeaderProps> = ({}: HeaderProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const button = document.querySelector("#menu-button");
      const menu = document.querySelector("#menu");

      const handleClick = () => {
        menu?.classList.toggle("hidden");
      };

      button?.addEventListener("click", handleClick);

      return () => {
        button?.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
        "
      >
        <div>
          <Link href="/">
            <Image
              priority
              src="/Logo001.svg"
              height={42}
              width={42}
              alt="Follow on our Blockchain club"
            />
          </Link>
        </div>
        {/* small change to commit */}
        <div className="flex space-x-4">
          <div className="block cursor-pointer md:hidden">
              <ModeToggle />
          </div> 
          <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        
       
        <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              {/* <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Features</a
              > */}
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              {/* <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Pricing</a
              > */}
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/events"
              >
                Event
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/portfolios"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/posts"
              >
                Writings
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-purple-400"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              {/* <a
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="#"
                >Sign Up</a
              > */}
              <Link
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="md:p-4 py-2 block invisible md:visible">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
