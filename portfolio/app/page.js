"Use client"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "next/image";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {

  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/pdf-file/Junior Software Developer - Lulu.pdf";
  //   link.download = "Mosobe Lulu Resume";
  //   link.click();
  // };

  return (
    <>
    <section id="home">
    <div className="relative">
      <div className="flex items-center justify-evenly min-h-screen p-5">
        {/* Text Content */}
        <div className="max-w-[50%]">
          <div className="font-semibold text-lg">
    
          <h2 className="text-2xl mb-4 text-black ">Software Developer</h2>
            
            <p className="text-xl leading-relaxed mb-8 text-black ">
              As a highly motivated and quick learner, I am enthusiastic about advancing my skills and contributing to dynamic software development teams.
              With a strong commitment to staying up-to-date with the latest technologies and best practices, I am dedicated to crafting efficient and high-quality software solutions.
              My passion for problem-solving and my experience in Html, Css, Javascript, ReactJs, and NextJs make me a valuable asset to any software development project.
            </p>
            <div>
              <button
                // onClick={handleDownload}
                className="bg-[#27415e] text-[#f8f6f6] px-6 py-2 text-lg rounded-md cursor-pointer"
              >
                Download My Resume
              </button>
            </div>
          </div>
        </div>

        {/* Profile Picture and Icons */}
        <div className="text-center">
          <Image src='/images/myPhoto.jpg'
          width={256}
          height={256}
          className="h-64 w-64 object-cover rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[50%] rounded-br-[50%] mb-4"

            alt="ProfilePic"/>
          <div className="flex justify-center gap-4 bg-[#1c1b5f]">
            <a
              className="filter invert"
              href="https://github.com/MOSOBELULU"
              > 
            <GitHubIcon/>
            <LinkedInIcon/>
            <WhatsAppIcon/>
              <div className="relative bg-[#b8b1ae]">
          </div>
        

        {/* Profile Picture and Icons */}
        <div className="text-center">
         {/* <img
            src="/images/WhatsApp Image  2023-10-16 at 19.45.40_e43ddf9f.jpg"
            className="h-64 w-64 object-cover rounded-tl-[50%] rounded-br-[50%] mb-4"
            alt="ProfilePic"
          /> */}
          <div className="flex justify-center gap-4 bg-[#1c1b5f]">
          {/* <a
              className="filter invert"
              href="https://github.com/MOSOBELULU"
            > github */}
              {/* <GitHubIcon className="w-8 h-8 text-white" /> */}
            {/* </a> */}
            {/* <a
              className="filter invert"
              href="https://www.linkedin.com/in/lulu-mosobe-b96a99139/"
            > */}
             {/* <LinkedInIcon className="w-8 h-8 text-white" />
             </a>
            <a
              className="filter invert"
              href="https://wa.me/C2IKIHH3LESAM1"
            > */}
              {/* <img src="/images/whatsapp.png" alt="WhatsApp" className="w-8 h-8" /> */}
            {/* </a> */}
          </div>
        </div>
     
   
            </a>
            {/* <a
              className="filter invert"
              href="https://www.linkedin.com/in/lulu-mosobe-b96a99139/"
            >
             <LinkedInIcon className="w-8 h-8 text-white" />
             </a> */}
            {/* <a
              className="filter invert"
              href="https://wa.me/C2IKIHH3LESAM1"
            > */}
              {/* <img src="/images/whatsapp.png" alt="WhatsApp" className="w-8 h-8" /> */}
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
    </section>
     <About/>
     <Projects/>
     <Contact/>
    </>
  );
}
