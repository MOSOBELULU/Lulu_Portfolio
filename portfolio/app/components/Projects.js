// components/Projects.js
import { projectList } from '../data/data';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12" id="projects">
      <h1 className="text-3xl font-semibold text-center mb-6">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            {/* <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" /> */}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 inline-block">
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
