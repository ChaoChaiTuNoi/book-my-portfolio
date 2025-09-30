import { RevealOnScroll } from '../RevealOnScroll';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiMysql, SiAdobeaftereffects, SiAdobepremierepro, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiAdobexd, SiBlender, SiNextdotjs, SiNestjs } from 'react-icons/si';

export const About = () => {

    const frontendSkills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Vue",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
    ]
    const backendSkills = [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Nest.js",
        "SQL",
    ]
    const Motiondesigner = [
        "After Effect",
        "Premiere Pro",
        "Illustrator",
        "Photoshop",
        "Figma",
        "XD",
        "Blender",
    ]
    const tools = {
    "HTML5":<FaHtml5 size={20}/> ,
     "CSS3": <FaCss3Alt size={20} /> ,
     "JavaScript": <FaJs size={20} /> ,
     "React": <FaReact size={20} /> ,
     "Vue": <FaVuejs size={20} /> ,
     "Next.js": <SiNextdotjs size={20} /> ,
     "Nest.js": <SiNestjs size={20} /> ,
     "Tailwind CSS": <SiTailwindcss size={20} /> ,
     "Bootstrap": <FaBootstrap size={20} /> ,
     "Node.js": <FaNodeJs size={20} /> ,
     "Express.js": <SiExpress size={20} /> ,
     "MongoDB": <SiMongodb size={20} /> ,
     "Firebase": <SiFirebase size={20} /> ,
     "SQL": <SiMysql size={20} /> ,
     "After Effect": <SiAdobeaftereffects size={20} /> ,
     "Premiere Pro": <SiAdobepremierepro size={20} /> ,
     "Illustrator": <SiAdobeillustrator size={20} /> ,
     "Photoshop": <SiAdobephotoshop size={20} /> ,
     "Figma": <SiFigma size={20} /> ,
     "XD": <SiAdobexd size={20} /> ,
     "Blender": <SiBlender size={20} /> 
    };

    

    return (<section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {""}
                About me
            </h2>
            <div className="glass rounded-xl p-8 bordor-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    I'm a creative web developer and motion graphic designer based in Thailand. I have a passion for web development and love to create motion graphics. I'm always looking for new challenges and opportunities to learn new things.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Frontend
                    </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tools[tech]}<span className="ml-2">{tech}</span>
                    </span>
                  ))}

                        </div>

                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Backend
                    </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tools[tech]}<span className="ml-2">{tech}</span>
                    </span>
                  ))}

                        </div>
                    </div>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    
                    <h3 className="text-xl font-bold mb-4"> 
                        Motion and designer
                    </h3>
                    <div className="flex flex-wrap gap-2">
                    {Motiondesigner.map((tech, key) => (
                    <span
                      key={key}
                      className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                      {tools[tech]}<span className="ml-2">{tech}</span>
                    </span>
                  ))}   
                  </div>
                    </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">
                  🏫 Education
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong> B.S. in Information Technology </strong> - Sripatum University (2021-2024)
                    </li>
                    <li>
                        <strong> Math-Science </strong> - Mary Immaculate convent school (2017-2020)
                    </li>

                  </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">
                  💼 Work Experience
                  </h3>
                  <div className="space-y-4 text-gray-300">
                  <div>
                        <h4 className="font-semibold">
                            {""}
                            <strong>- Freelance at FASTWORK (2021-Present)</strong>{""}
                        </h4>
                        <p>
                            Create a motion graphic, media ads for online platform and create a UX/UI for mock up </p>

                    </div>
                    <div>
                        <h4 className="font-semibold">
                            {""}
                            <strong>-Intern at NECTEC (2024)</strong>{""}
                        </h4>
                        <p>
                            Worked as a web developer and motion graphic designer
                        </p>

                    </div>
                    <div>
                        <h4 className="font-semibold">
                            {""}
                            <strong>-Frontend Developer (March 2025 - Present)</strong>{""}
                        </h4>
                        <p>
                            -Develop and build websites according to Figma designs and requirements using Next.js, Redux Saga, Tailwind CSS, JWT, and Shadcn.
                        </p>
                        <p>
                            -Integrate websites with APIs and create dynamic UIs that respond to API data, such as a form that changes based on user input.
                        </p>
                        <p>-Debug and resolve issues identified during user testing.

                        </p>
                        <p>
                            -Develop APIs using Nest.js, Prisma, and DBeaver SQL. (Able to create API responses but not yet proficient with database structure). 
                        </p>
                    </div>
                    

                  </div>
                </div>
            </div>

        </div>
        </RevealOnScroll>
    </section>
    )
}