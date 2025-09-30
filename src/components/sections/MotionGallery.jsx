import { useEffect } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import upworkVideo from '/src/assets/showreel.mp4';
import thaitmartChristmasVideo from '/src/assets/Thaimart GIFT FEST 2025 (Christmas)แนวนอน_1_1.mp4';
import Eurosale from '/src/assets/Thaimart football แนวนอน_1.mp4';
import VexRobot from '/src/assets/ClickRobot_Vex_ Robotics แนวนอน_1.mp4';
import oasis from '/src/assets/draft 3 oasis cocktail lounge  แนวนอน 1920 x 1080_1.mp4';
import easel from '/src/assets/easel_logo_draft 4_1.mp4';
import healthme from '/src/assets/Final Health me ! logo แนวนอน_1.mp4';
import Alandzjourney from '/src/assets/Alandz journey map.mp4';
import maider from '/src/assets/maider 1920x1080_1.mp4';
import Multicast from '/src/assets/Multicast_1.mp4';
import thaimartai from '/src/assets/Thai mart Ai ขุมทรัพย์ แนวนอน_1.mp4';
import thaimartair from '/src/assets/thai mart air_1.mp4';
import thaimartrainny from '/src/assets/Thai mart rainny season แนวนอน_1.mp4';
import thaimartsmilecare from '/src/assets/thai mart smile care_1.mp4';
import thaimartmegasale from '/src/assets/Thaimart mega sale กำแพงเพชร_1.mp4';
import thaimartairvietnam from '/src/assets/Thaimart ช้อปแอร์ฟิน ลุ้นบินเที่ยวเวียดนาม แนวนอน_1.mp4';
import electrolux from '/src/assets/Wall 16sc_Electrolux เครื่องซักผ้า_1.mp4';
import mcouponwinter from '/src/assets/Wall 16sc_M-Coupon Winter Wonder Coupon_1.mp4';
import mgenkiddoraemon from '/src/assets/Wall 16sc_M-Gen Kids ดู Doraemon ฟรี! ที่ Kids Cinema_1.mp4';
import gladiator2 from '/src/assets/Wall 16sc_ตั๋วหนัง Gladiator II (IMAX) รับฟรี! Exclusive Poster และ Collectable Card_1.mp4';
import landslide from '/src/assets/slime land slide.mp4';
import thaismile from '/src/assets/ไทยประกันชีวิต welcome thailand_1.mp4';
import thaimartchinese from '/src/assets/ไทยมาร์ท ตรุษจีน มะเส็ง มหาเฮง 2025 แนวนอน_1.mp4';
import thaimartplushot from '/src/assets/ไทยมาร์ท พลัส อุตรดิตถ์ 26ก.ย-2ต.ค68 แนวนอน_1.mp4';
import thaimartutt from '/src/assets/ลดบ้า 5 วัน สนั่น ปฐพี อุตรดิตถ์ แนวนอน_2.mp4';
import popuptent3plus_2 from '/src/assets/popuptent 3plus_2.mp4';

export const MotionGallery = () => {

    const motionProjects = [
        {
            id: 1,
            title: "My show reel 2025",
            videoFile: upworkVideo,
            thumbnail: upworkVideo,
            description: "Show reel showcasing my best work of 2025"
        },
        {
            id: 2,
            title: "Thaimart GIFT FEST 2025 Christmas", 
            videoFile: thaitmartChristmasVideo,
            thumbnail: thaitmartChristmasVideo,
            description: "Christmas advertising campaign for Thaimart"
        },
        {
            id: 3,
            title: "Thaimart Eurosale 2024",
            videoFile: Eurosale,
            thumbnail: Eurosale,
            description: "European sale promotion animation"
        },
        {
            id: 4,
            title: "ClickRobot Vex Robotics",
            videoFile: VexRobot,
            thumbnail: VexRobot,
            description: "ClickRobot Vex Robotics animation"
        },
        {
            id: 5,
            title: "oasis cocktail lounge",
            videoFile: oasis,
            thumbnail: oasis,
            description: "oasis cocktail lounge promotional video"
        },
        {
            id: 6,
            title: "easel logo animation",
            videoFile: easel,
            thumbnail: easel,
            description: "easel logo animation"
        },
        {
            id: 7,
            title: "healthme logo animation",
            videoFile: healthme,
            thumbnail: healthme,
            description: "healthme logo animation"
        },
        {
            id: 8,
            title: "Alandz journey map NFT animation",
            videoFile: Alandzjourney,
            thumbnail: Alandzjourney,
            description: "Alandz journey map NFT animation"
        },
        {
            id: 9,
            title: "mother day promotion",
            videoFile: maider,
            thumbnail: maider,
            description: "mother day promotion"
        },
        {
            id: 10,
            title: "Multicast logo animation",
            videoFile: Multicast,
            thumbnail: Multicast,
            description: "Multicast logo animation"
        },
        {
            id: 11,
            title: "Thai mart Ai ขุมทรัพย์",
            videoFile: thaimartai,
            thumbnail: thaimartai,
            description: "Thai mart Ai ขุมทรัพย์"
        },
        {
            id: 12,
            title: "thaimart air ลดให้ยับดับทุกองศา",
            videoFile: thaimartair,
            thumbnail: thaimartair,
            description: "thaimart air ลดให้ยับดับทุกองศา"
        },
        {
            id: 13,
            title: "Thai mart rainny season",
            videoFile: thaimartrainny,
            thumbnail: thaimartrainny,
            description: "Thai mart rainny season"
        },
        {
            id: 14,
            title: "Thai mart smile care",
            videoFile: thaimartsmilecare,
            thumbnail: thaimartsmilecare,
            description: "Thai mart smile care"
        },
        {
            id: 15,
            title: "Thai mart mega sale",
            videoFile: thaimartmegasale,
            thumbnail: thaimartmegasale,
            description: "Thai mart mega sale"
        },
        {
            id: 16,
            title: "Thai mart air ลุ้นบินเที่ยวเวียดนาม",
            videoFile: thaimartairvietnam,
            thumbnail: thaimartairvietnam,
            description: "Thai mart air ลุ้นบินเที่ยวเวียดนาม"
        },
         {
            id: 17,
            title: "electrolux เครื่องซักผ้า",
            videoFile: electrolux,
            thumbnail: electrolux,
            description: "electrolux เครื่องซักผ้า"
        },
        {
            id: 18,
            title: "M-Coupon Winter Wonder Coupon",
            videoFile: mcouponwinter,
            thumbnail: mcouponwinter,
            description: "M-Coupon Winter Wonder Coupon"
        },
        {
            id: 19,
            title: "M-Gen Kids ดู Doraemon ฟรี! ที่ Kids Cinema",
            videoFile: mgenkiddoraemon,
            thumbnail: mgenkiddoraemon,
            description: "M-Gen Kids ดู Doraemon ฟรี! ที่ Kids Cinema"
        },
       {
            id: 20,
            title: "ตั๋วหนัง Gladiator II (IMAX) รับฟรี! Exclusive Poster และ Collectable Card",
            videoFile: gladiator2,
            thumbnail: gladiator2,
            description: "ตั๋วหนัง Gladiator II (IMAX) รับฟรี! Exclusive Poster และ Collectable Card"
        },
        {
            id: 21,
            title: "Alandz land slide NFT aniamation",
            videoFile: landslide,
            thumbnail: landslide,
            description: "Alandz land slide NFT aniamation"
        },
        {
            id: 22,
            title: "ไทยประกันชีวิต welcome thailand",
            videoFile: thaismile,
            thumbnail: thaismile,
            description: "ไทยประกันชีวิต welcome thailand"
        },
        {
            id: 23,
            title: "ไทยมาร์ท ตรุษจีน มะเส็ง มหาเฮง 2025",
            videoFile: thaimartchinese,
            thumbnail: thaimartchinese,
            description: "ไทยมาร์ท ตรุษจีน มะเส็ง มหาเฮง 2025"
        },
        {
            id: 24,
            title: "ไทยมาร์ท พลัส อุตรดิตถ์ 26ก.ย-2ต.ค68",
            videoFile: thaimartplushot,
            thumbnail: thaimartplushot,
            description: "ไทยมาร์ท พลัส อุตรดิตถ์ 26ก.ย-2ต.ค68"
        },
        {
            id: 25,
            title: "ลดบ้า 5 วัน สนั่น ปฐพี อุตรดิตถ์",
            videoFile: thaimartutt,
            thumbnail: thaimartutt,
            description: "ลดบ้า 5 วัน สนั่น ปฐพี อุตรดิตถ์"
        },
        {
            id: 26,
            title: "popuptent 3plus",
            videoFile: popuptent3plus_2,
            thumbnail: popuptent3plus_2,
            description: "popuptent 3plus"
        },


    ];

    // Add CSS animations for both rows
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes scroll-left {
                from {
                    transform: translateX(0);
                }
                to {
                    transform: translateX(-25%);
                }
            }
            @keyframes scroll-right {
                from {
                    transform: translateX(-25%);
                }
                to {
                    transform: translateX(0);
                }
            }
            .animate-scroll-left {
                animation: scroll-left 40s linear infinite;
            }
            .animate-scroll-right {
                animation: scroll-right 45s linear infinite;
            }
            .animate-scroll-left:hover,
            .animate-scroll-right:hover {
                animation-play-state: paused;
            }
        `;
        document.head.appendChild(style);

        return () => {
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        };
    }, []);

    return (
        <section id="motion-gallery" className="min-h-screen bg-black py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Motion Graphics Gallery
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A continuous showcase of my motion graphics work featuring advertisements, animations, and creative video projects
                        </p>
                    </div>

                    {/* Infinite Scrolling Video Gallery - 2 Rows */}
                    <div className="relative space-y-16">
                        {/* First Row - Left to Right */}
                        <div className="overflow-hidden">
                            <div className="flex gap-6 animate-scroll-left space-y-4" style={{ width: 'max-content' }}>
                                {/* First half of projects repeated multiple times for seamless infinite loop */}
                                {Array(4).fill(motionProjects.slice(0, Math.ceil(motionProjects.length / 2))).flat().map((project, index) => (
                                <div
                                    key={`row1-${project.id}-${index}`}
                                    className="flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 "
                                >
                                    {/* Video Player */}
                                    <div className="w-full h-48 relative bg-gray-900">
                                        <video
                                            src={project.videoFile}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            controls={false}
                                            preload="auto"
                                            className="w-full h-full object-contain"
                                            onError={(e) => console.log('Video error:', e, project.videoFile)}
                                            onLoadStart={() => console.log('Loading:', project.videoFile)}
                                        >
                                            <source src={project.videoFile} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                                    </div>
                                    
                                    {/* Video Info */}
                                    <div className="p-4">
                                        <h3 className="text-base font-bold text-white mb-2 truncate">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second Row - Right to Left */}
                        <div className="overflow-hidden">
                            <div className="flex gap-6 animate-scroll-right" style={{ width: 'max-content' }}>
                                {/* Second half of projects repeated multiple times for seamless loop */}
                                {Array(4).fill(motionProjects.slice(Math.ceil(motionProjects.length / 2))).flat().map((project, index) => (
                                    <div
                                        key={`row2-${project.id}-${index}`}
                                        className="flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                                    >
                                        {/* Video Player */}
                                        <div className="w-full h-48 relative bg-gray-900">
                                            <video
                                                src={project.videoFile}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                controls={false}
                                                preload="auto"
                                                className="w-full h-full object-contain"
                                                onError={(e) => console.log('Video error:', e, project.videoFile)}
                                                onLoadStart={() => console.log('Loading:', project.videoFile)}
                                            >
                                                <source src={project.videoFile} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                                        </div>
                                        
                                        {/* Video Info */}
                                        <div className="p-4">
                                            <h3 className="text-base font-bold text-white mb-2 truncate">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-xs line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};