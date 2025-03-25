

//import Image from 'next/image';


export default function About() {
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "/pdf-file/Junior Software Developer - Lulu.pdf";
  //   link.download = "Mosobe Lulu Resume";
  //   link.click();
  // };
  return (
    <div className="max-w-4xl mx-auto px-6 py-12" id="about">
      <h1 className="text-3xl font-semibold text-center mb-6 text-black">
        About Me
      </h1>
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
  );
}
