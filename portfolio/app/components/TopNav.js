import { HomeIcon, UserIcon, CodeBracketIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function TopNav() {
  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex justify-center space-x-8 py-4">
        <a href="#home" className="flex items-center space-x-2 hover:text-gray-400">
          <HomeIcon className="w-5 h-5" />
          <span>Home</span>
        </a>
        <a href="#about" className="flex items-center space-x-2 hover:text-gray-400">
          <UserIcon className="w-5 h-5" />
          <span>About</span>
        </a>
        <a href="#projects" className="flex items-center space-x-2 hover:text-gray-400">
          <CodeBracketIcon className="w-5 h-5" />
          <span>Projects</span>
        </a>
        <a href="#contact" className="flex items-center space-x-2 hover:text-gray-400">
          <EnvelopeIcon className="w-5 h-5" />
          <span>Contact</span>
        </a>
      </nav>
    </header>
  );
}
