"use client";
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  Bars3Icon,
  AcademicCapIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-md z-50 w-full">
      <nav className="flex items-center justify-between w-full px-6 py-3">
        <div className="flex items-center">
          <div className="text-xl font-bold">Lulu Mosobe</div>
        </div>

        <div className="hidden md:flex space-x-6 justify-center flex-1">
          <a
            href="#home"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a
            href="#about"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <UserIcon className="w-5 h-5" />
            <span>About</span>
          </a>
          <a
            href="#education"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <AcademicCapIcon className="w-5 h-5" />
            <span>Education</span>
          </a>
          <a
            href="#stack"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <CpuChipIcon className="w-5 h-5" />
            <span>Stack</span>
          </a>
          <a
            href="#projects"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <CodeBracketIcon className="w-5 h-5" />
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <EnvelopeIcon className="w-5 h-5" />
            <span>Contact</span>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-gray-800 text-white`}
      >
        <a href="#home" className="block px-6 py-2 hover:bg-gray-700">
          Home
        </a>
        <a href="#about" className="block px-6 py-2 hover:bg-gray-700">
          About
        </a>
        <a href="#projects" className="block px-6 py-2 hover:bg-gray-700">
          Projects
        </a>
        <a href="#contact" className="block px-6 py-2 hover:bg-gray-700">
          Contact
        </a>
      </div>
    </header>
  );
}
