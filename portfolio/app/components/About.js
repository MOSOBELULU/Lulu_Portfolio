export default function About() {
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = "./pdf/Luluresume.pdf"; // Fixed the incorrect href
  //   link.download = "Mosobe_Lulu_Resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 bg-gray-100 rounded-lg shadow-lg" id="about">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#27415e]">
        About Me
      </h1>
      <p className="text-lg leading-relaxed text-gray-800 text-center md:text-left">
        I am a highly motivated and quick learner, eager to advance my skills and contribute to dynamic software
        development teams. With a commitment to staying updated with the latest technologies and best practices,
        I focus on crafting efficient and high-quality software solutions. My problem-solving mindset and experience
        in HTML, CSS, JavaScript, React.js, and Next.js make me a valuable asset to any development project.
      </p>
      <div className="flex justify-center mt-8">
        <button
          // onClick={handleDownload}
          className="bg-[#27415e] text-white px-8 py-3 text-lg font-medium rounded-md shadow-md transition-transform transform hover:scale-105 hover:bg-[#1e334d]"
        >
          Download My Resume
        </button>
      </div>
    </section>
  );
}
