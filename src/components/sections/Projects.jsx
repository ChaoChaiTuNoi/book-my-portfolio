import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiMysql, SiAdobeaftereffects, SiAdobepremierepro, SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiAdobexd, SiBlender, SiNextdotjs, SiNestjs, SiJsonwebtokens, SiShadcnui, SiPrisma } from 'react-icons/si';

const tools = {
    "HTML5":<FaHtml5 size={20}/> ,
     "CSS3": <FaCss3Alt size={20} /> ,
     "JavaScript": <FaJs size={20} /> ,
     "React": <FaReact size={20} /> ,
     "Vue": <FaVuejs size={20} /> ,
     "Next.js": <SiNextdotjs size={20} /> ,
     "JWT": <SiJsonwebtokens size={20} /> ,
     "Shadcn":<SiShadcnui size={20} /> ,
     "Prisma":<SiPrisma size={20} /> ,
     "Nest.js": <SiNestjs size={20} /> ,
     "Tailwind CSS": <SiTailwindcss size={20} /> ,
     "Bootstrap": <FaBootstrap size={20} /> ,
     "Node.js": <FaNodeJs size={20} /> ,
     "Express.js": <SiExpress size={20} /> ,
     "MongoDB": <SiMongodb size={20} /> ,
     "Firebase": <SiFirebase size={20} /> ,
     "SQL": <SiMysql size={20} /> ,
     "Aftereffect": <SiAdobeaftereffects size={20} /> ,
     "Premiere Pro": <SiAdobepremierepro size={20} /> ,
     "Illustrator": <SiAdobeillustrator size={20} /> ,
     "Photoshop": <SiAdobephotoshop size={20} /> ,
     "Figma": <SiFigma size={20} /> ,
     "XD": <SiAdobexd size={20} /> ,
     "Blender": <SiBlender size={20} /> 
};

export const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeVideoIndex, setActiveVideoIndex] = useState({});

    const projects = [
        {
            id: 1,
            title: "Motion Graphics Portfolio",
            description: "Collection of my motion graphics work including advertisements, animations, and video projects using After Effect, Illustrator, Photoshop, and Premiere Pro.",
            category: "motion",
            technologies: ["Aftereffect", "Illustrator", "Photoshop", "Premiere Pro"],
            videos: [
                {
                    title: "My show reel 2025",
                    url: "https://www.youtube.com/embed/fwqDB_6jeSA?si=hGirPlKK70J_Ui9g",
                    thumbnail: "https://img.youtube.com/vi/fwqDB_6jeSA/maxresdefault.jpg"
                },
                {
                    title: "Thaimart GIFT FEST 2025 Christmas",
                    url: "https://www.youtube.com/embed/PDntcVHBx-8?si=X472Lozd06N4k83-",
                    thumbnail: "https://img.youtube.com/vi/PDntcVHBx-8/maxresdefault.jpg"
                },
                {
                    title: "Thaimart Eurosale 2024",
                    url: "https://www.youtube.com/embed/3T5e-0nTVQ4?si=_tgWDQ4xNC44UyHf",
                    thumbnail: "https://img.youtube.com/vi/3T5e-0nTVQ4/maxresdefault.jpg"
                },
                {
                    title: "Thaimart Chinese New Year 2025",
                    url: "https://www.youtube.com/embed/EPUCoCKfW3w?si=YXkrHvCPOQo2XnwQ",
                    thumbnail: "https://img.youtube.com/vi/EPUCoCKfW3w/maxresdefault.jpg"
                },
                {
                    title: "Motion Animation Project",
                    url: "https://www.youtube.com/embed/3pwTsoFZdC0?si=A_tVGbqp1jGhyk6I",
                    thumbnail: "https://img.youtube.com/vi/3pwTsoFZdC0/maxresdefault.jpg"
                },
                {
                    title: "Creative Motion Design",
                    url: "https://www.youtube.com/embed/JlU9Di9jLzA?si=3ILvt5E21nEzrCkH",
                    thumbnail: "https://img.youtube.com/vi/JlU9Di9jLzA/maxresdefault.jpg"
                },
                {
                    title: "NFT project from A+Landz",
                    url: "https://www.youtube.com/embed/gHvlGW7YGuk?si=5aptNpwf5lXgqP0B",
                    thumbnail: "https://img.youtube.com/vi/gHvlGW7YGuk/maxresdefault.jpg"
                }
            ],
            type: "video"
        },
        {
            id: 2,
            title: "Web application check status API",
            description: "It is a system for monitoring the operation of the services that Ai For Thai has made available for public use.",
            category: "coding",
            technologies: ["Vue", "Node.js", "Express.js", "MongoDB"],
            projectUrl: "https://github.com/ChaoChaiTuNoi/nectec-web.git",
            type: "web"
        },
        {
            id: 3,
            title: "My portfolio website",
            description: "This is a web portfolio to showcase my skills and work experience. It includes projects, tech stacks, and contact information about me.",
            category: "coding",
            technologies: ["React", "Tailwind CSS"],
            projectUrl: "#",
            type: "web"
        },
          {
            id: 4,
            title: "pixtro-telepromp",
            description: "This is a web pixtro-telepromp to use for include file and read script for record video.",
            category: "coding",
            technologies: ["Next.js", "Tailwind CSS"],
            projectUrl: "https://pixtro-telepromp.vercel.app/",
            type: "web"
        },
         {
            id: 5,
            title: "Doa-ribs for Research Information and Budget System",
            description: "This is a web application for managing research information and budget.",
            category: "coding",
            technologies: ["Next.js", "Tailwind CSS","Nest.js","SQL","JWT","Shadcn","Prisma"],
            projectUrl: "https://doa-ribs.doa.go.th/Homepage",
            type: "web"
        },


    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
            
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {''}
                    Featured Projects
                </h2>
                
                {/* Filter Buttons */}
                <div className="flex justify-center mb-8">
                    <div className="flex bg-gray-800/50 rounded-xl p-1 backdrop-blur-sm border border-white/10">
                        {[
                            { key: 'all', label: 'All Projects' },
                            { key: 'coding', label: 'Coding' },
                            { key: 'motion', label: 'Motion Graphics' }
                        ].map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                                    activeFilter === filter.key
                                        ? 'bg-blue-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={`p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all ${project.type === 'video' ? 'md:col-span-2' : ''}`}>
                            <h3 className="text-xl font-bold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-4">
                                {project.description}
                            </p>
                            
                            {/* Video carousel for motion projects */}
                            {project.type === 'video' && project.videos && (
                                <div className="mb-4">
                                    {/* Main video player */}
                                    <div className="w-full h-96 rounded-xl mb-4">
                                        <iframe
                                            src={project.videos[activeVideoIndex[project.id] || 0]?.url}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full rounded-xl"
                                        ></iframe>
                                    </div>
                                    
                                    {/* Video thumbnails carousel */}
                                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-gray-800/50">
                                        {project.videos.map((video, index) => (
                                            <div
                                                key={index}
                                                onClick={() => setActiveVideoIndex(prev => ({...prev, [project.id]: index}))}
                                                className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                                                    (activeVideoIndex[project.id] || 0) === index 
                                                        ? 'border-blue-500 shadow-lg' 
                                                        : 'border-gray-600 hover:border-blue-400'
                                                }`}
                                            >
                                                <img 
                                                    src={video.thumbnail} 
                                                    alt={video.title}
                                                    className="w-32 h-20 object-cover"
                                                />
                                                <div className="p-2 bg-gray-800/80 backdrop-blur-sm">
                                                    <p className="text-xs text-gray-300 truncate w-28">
                                                        {video.title}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {/* Technology badges */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="flex flex-row bg-blue-500/10 text-blue-500 py-1 px-6 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                        {tools[tech]}<span className="ml-2">{tech}</span>
                                    </span>
                                ))}
                            </div>
                            
                            {/* Project link for coding projects */}
                            {project.type === 'web' && (
                                <div className="flex justify-between items-center">
                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        View Project →
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
            </RevealOnScroll>

        </section>
    )
}