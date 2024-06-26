'use client'

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitType from "split-type"
import Typed from "typed.js"
import Lenis from "lenis"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"
import { FaFileDownload, FaLock } from "react-icons/fa"
import { useState, useEffect } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import AlertDownload from "./alert"
import Assets from "../utils/assetComponents"

const Home = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleDownloadResume = () => {
        const fileUrl = '/test.pdf';
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = 'Bagus Portfolio';
        anchor.click();
        setShowAlert(true)
    }

    if (showAlert === true) {
        setTimeout(() => {
            setShowAlert(false);
        }, 5000)
    }

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            initClassName: "data-aos",
            useClassNames: true,
            duration: 2500
        })
        
        // Text Reveal Effect
        gsap.registerPlugin(ScrollTrigger)

        const splitTypes = document.querySelectorAll<HTMLElement>('#revealText');
        splitTypes.forEach((char, i) => {
            const text = new SplitType(char, { types: 'chars,words' })

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top center',
                    end: 'top 20%',
                    scrub: true,
                    markers: false,
                },
                opacity: 0.2,
                stagger: 0.1
            })
        })

        // Smooth Scrolling
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Initialize Typed.js
        const typeDesc = new Typed("#changeText", {
            strings: ["Creation.", "Development.", "Testing."],
            typeSpeed: 50,
            backDelay: 2000,
            backSpeed: 40,
            loop: true,
        });

        return () => {
            typeDesc.destroy();
        };
    }, []);

    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-10 overflow-x-hidden">
                <div className="h-screen flex justify-center items-center">
                    <div className="grid grid-cols-2">
                        <div className="flex justify-center">
                            {/* IMAGE PROFILE */}
                            <div data-aos="fade-right" className="h-96 w-96 rounded-xl">
                                <Image priority src={Assets.IWebDeveloper} alt="Web Developer" className="h-full" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-start w-full h-full">
                            <h1 data-aos="fade-left" className="text-5xl font-extrabold text-white" id="title">Helping developer to create a website by ensuring user data is
                                <span className="flex flex-row items-end">s<FaLock className="text-4xl pb-1 text-neutral-300" />fe.</span>
                            </h1>
                            <p data-aos="fade-left" className="text-lg font-semibold text-gray-400 mt-5">
                                As a <span className="font-extrabold underline">Backend Developer</span>, I'm looking for ideas to improve security on all websites.
                                Having expertise in Node.js is very helpful in the field of API <span id="changeText"></span>
                            </p>
                            <div data-aos="fade-up" className="flex flex-col bg-slate-200 w-fit rounded-xl mt-5">
                                <a id="btnDownloadResume" onClick={handleDownloadResume} target="_blank" className="flex flex-row gap-4 items-center text-black px-5 py-2 font-semibold text-lg hover:text-gray-400 cursor-pointer">
                                    <FaFileDownload /> Resume
                                </a>
                            </div>
                            {showAlert ? <AlertDownload /> : null}
                        </div>
                    </div>
                </div>
                <div className="mt-5 h-screen">
                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center items-center gap-2" data-aos="fade-up">
                            <p className="text-white text-4xl font-semibold italic" id="revealText">"The more mistakes you make, the more knowledge you gain."</p>
                            <span className="text-white text-lg" id="revealText">Adrianus Bagus</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home