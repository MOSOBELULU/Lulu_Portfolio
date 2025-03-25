import { educationData } from "../data/data"
export default function Education(){
    return(
        <section id='education'>
            <h2 className="text-2xl font-semibold text-black">
                      Education
                    </h2>
                    <ul className="space-y-4">
                      {educationData.map((item, index) => (
                        <li key={index} className="border-b py-4">
                          <h3 className="text-xl font-semibold text-black">
                            {item.Qualification}
                          </h3>
                          <p className="text-black">{item.Institution}</p>
                          <p className="text-black">{item.Duration}</p>
                        </li>
                      ))}
                    </ul>
        </section>
    )
}