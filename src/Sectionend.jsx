import { useState, useEffect, useRef } from 'react';
import tem from './images/tem.mp4';
import frhan from './images/frhan.avif';
import coverImage from './images/logoo.jpg'; // Import de l'image de couverture
import './styles.css'; // Import de votre fichier CSS personnalisé


export default function Sectionend() {
    const [percentage, setPercentage] = useState(0);
    const [startCounting, setStartCounting] = useState(false);
    const sectionRef = useRef(null);

    // Function to handle the increment animation
    useEffect(() => {
        if (startCounting) {
            let start = 0;
            const end = 75; // Final percentage
            const duration = 2000; // Duration in milliseconds (2 seconds)
            const incrementTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
                start += 1;
                setPercentage(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer); // Clean up the timer when the component unmounts
        }
    }, [startCounting]);

    // Use IntersectionObserver to trigger the animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect(); // Stop observing once the animation starts
                }
            });
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-10">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-24">
                    <div className='video-container flex justify-center items-center'>
                        <video className="custom-video text-center md:w-full h-96 rounded-3xl p-5 flex items-center justify-center" controls poster={coverImage}>
                            <source src={tem} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                        <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                            <img className="ml-auto rounded-xl" src={frhan} alt="frhan" />

                            <img className="absolute -top-4 -left-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg" alt="" />

                            <div className="absolute -bottom-10 -left-16">
                                <div className="bg-white rounded-xl">
                                    <div className="px-8 py-10">
                                        {/* Display the animated percentage */}
                                        <span className="block text-4xl font-bold text-center text-black lg:text-5xl">
                                            +{percentage}%
                                        </span>
                                        <span className="block mt-2 text-base text-center leading-tight text-black">
                                            من الأشخاص سعداء <br /> بالانضمام إلينا
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
