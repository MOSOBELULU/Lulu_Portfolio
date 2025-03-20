// components/About.js
import { educationData, skillsData } from '../data/data';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12" id="about">
      <h1 className="text-3xl font-semibold text-center mb-6">About Me</h1>

      <section>
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="space-y-4">
          {educationData.map((item, index) => (
            <li key={index} className="border-b py-4">
              <h3 className="text-xl font-semibold">{item.Qualification}</h3>
              <p className="text-gray-600">{item.Institution}</p>
              <p className="text-gray-500">{item.Duration}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold">{category}</h3>
              <ul className="list-disc pl-6 space-y-2">
                {skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
