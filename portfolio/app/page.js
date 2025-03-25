import { Poppins } from "next/font/google"; 
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Stack from "./components/Stack";

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <section id="home" className="bg-gray-100">
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen p-8 space-y-8 md:space-y-0">
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h2
                className={`text-5xl md:text-6xl mb-6 text-gray-800 ${poppins.className} animate-dramaticFadeIn hover:animate-hoverEffect`}
              >
                Software Developer
              </h2>
              <div className="flex justify-center md:justify-start gap-6 p-2 rounded-full mt-6">
  <a
    className="filter invert transition-colors duration-300 hover:text-gray-300"
    href="https://github.com/MOSOBELULU"
    target="_blank"
    rel="noopener noreferrer"
  >
    <GitHubIcon className="w-16 h-16 text-white icon-hover" />
  </a>

  <a
    className="filter invert transition-colors duration-300 hover:text-gray-300"
    href="https://www.linkedin.com/in/lulu-mosobe-b96a99139/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <LinkedInIcon className="w-16 h-16 text-white icon-hover" />
  </a>

  <a
    className="filter invert transition-colors duration-300 hover:text-gray-300"
    href="https://wa.me/+27765275896"
    target="_blank"
    rel="noopener noreferrer"
  >
    <WhatsAppIcon className="w-16 h-16 text-white icon-hover" />
  </a>
</div>

            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <Image
                src="/images/myPhoto.jpg"
                width={300}
                height={300}
                className="h-72 w-72 object-cover rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[50%] rounded-br-[50%] mb-6 md:mb-0 transition-transform transform hover:scale-105"
                alt="ProfilePic"
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Education />
      <Stack />
      <Projects />
      <Contact />
    </>
  );
}
