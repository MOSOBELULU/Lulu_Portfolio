'use client'
export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./pdf/Luluresume.pdf"; // Fixed the incorrect href
    link.download = "Mosobe_Lulu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className=" w-full mx-auto px-8 py-16 rounded-lg" id="about">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#27415e]">
        About Me
      </h1>
      <p className="text-lg leading-relaxed text-gray-800 text-center md:text-left">
        Hi, my name is Lulu Mosobe, a 28-year-old Junior Software Developer from
        Rustenburg, South Africa. With a strong foundation in both frontend and
        backend development, I focus mainly on JavaScript to build efficient and
        scalable software solutions. Alongside my tech background, I hold a
        qualification in financial accounting, which drives my ambition to
        become a financial technologist—bridging the gap between finance and
        technology.
      </p>
      <br></br>
      <p className="text-lg leading-relaxed text-gray-800 text-center md:text-left">
        I am always eager to expand my skill set and stay current with industry
        trends and best practices. I approach challenges with a problem-solving
        mindset and enjoy developing clean, well-organized code that delivers
        real value. Whether it’s creating intuitive user interfaces or working
        on backend functionalities, I aim to deliver practical solutions that
        meet both user needs and business goals. In addition to my technical
        skills, I’m committed to continuous learning and look forward to
        contributing to innovative projects within dynamic development teams.
      </p>
      <div className="flex justify-center mt-8">
        <button
          onClick={handleDownload}
          className="bg-[#27415e] text-white px-8 py-3 text-lg font-medium rounded-md shadow-md transition-transform transform hover:scale-105 hover:bg-[#1e334d]"
        >
          Download My Resume
        </button>
      </div>
    </section>
  );
}
