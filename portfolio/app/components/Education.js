import Image from "next/image";
import { educationData } from "../data/data";

export default function Education() {
  return (
    <section id="education" className="py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Education Content */}
        <div>
          <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">Education</h2>
          <ul className="space-y-6">
            {educationData.map((item, index) => (
              <li
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.Qualification}
                </h3>
                <p className="text-gray-700 text-lg font-medium">
                  {item.Institution}
                </p>
                <p className="text-gray-600 text-sm">{item.Duration}</p>
              </li>
            ))}
          </ul>
        </div>
      
        <div className="flex justify-center">
          <Image 
            src="/images/education.png" 
            alt="Education Illustration" 
            width={600} 
            height={600} 
          />
        </div>
      </div>
    </section>
  );
}
