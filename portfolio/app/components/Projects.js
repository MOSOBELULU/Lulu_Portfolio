// components/Projects.js
import { projectList } from '../data/data';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12" id="projects">
      <h1 className="text-8xl font-semibold text-black text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image container */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-full"
                width={1920} 
                height={1080} 
              />
            </div>

            {/* Text content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Visit Project
              </a>
              <br></br>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Code 
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
