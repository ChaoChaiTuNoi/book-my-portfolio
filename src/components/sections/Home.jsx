import { RevealOnScroll } from '../RevealOnScroll';
import avatar from '/src/assets/peeps-avatar-alpha.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiMysql, SiAdobeaftereffects, SiAdobepremierepro, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiAdobexd, SiBlender, SiNextdotjs, SiNestjs } from 'react-icons/si';

const tools = [
    { icon: <FaHtml5 size={50} /> },
    { icon: <FaCss3Alt size={50} /> },
    { icon: <FaJs size={50} /> },
    { icon: <FaReact size={50} /> },
    { icon: <FaVuejs size={50} /> },
    { icon: <SiNextdotjs size={50} /> },
    { icon: <SiNestjs size={50} /> },
    { icon: <SiTailwindcss size={50} /> },
    { icon: <FaBootstrap size={50} /> },
    { icon: <FaNodeJs size={50} /> },
    { icon: <SiExpress size={50} /> },
    { icon: <SiMongodb size={50} /> },
    { icon: <SiFirebase size={50} /> },
    { icon: <SiMysql size={50} /> },
    { icon: <SiAdobeaftereffects size={50} /> },
    { icon: <SiAdobepremierepro size={50} /> },
    { icon: <SiAdobeillustrator size={50} /> },
    { icon: <SiAdobephotoshop size={50} /> },
    { icon: <SiFigma size={50} /> },
    { icon: <SiAdobexd size={50} /> },
    { icon: <SiBlender size={50} /> },
];

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <div>
                        <img src={avatar} alt="Avatar" className="mx-auto mb-6 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right"> 
                        Hi, My name is Book 
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        I'm a Motion graphic designer and web developer who loves creating motion graphics and crafting digital experiences. My goal is to build my own game and tell the story of my world through creative technology.
                    </p>
                    <div className="flex justify-center space-x-4 mb-8">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-meduim transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            View my Projects
                        </a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10">
                            Contact Me
                        </a>
                    </div>
                    <div className="scroll-container max-w-5xl mx-auto relative">
                        <div className="mt-8 animate-scroll">
                            {[...tools, ...tools].map((tool, index) => (
                            <span key={index} className="mx-4 text-lg flex items-center text-blue-500">
                                {tool.icon}
                            </span>
                            ))}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}