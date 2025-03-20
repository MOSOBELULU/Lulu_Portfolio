import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <h1 className="flex justify-center items-center h-screen">
      My next Portfolio
    </h1>
     <About/>
     <Projects/>
     <Contact id='contact'/>
    </>
  );
}
