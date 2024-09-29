/**
 * @copyright 2024 ASSASSIN
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skill from "./components/Skill.jsx";
import Work from "./components/Work.jsx";
import Review from "./components/Review.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
    
    useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: '-200 bottom',
                end: 'bottom 80%',
                scrub: true,
                marker: true
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        })
    });
    });

    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    )

}

export default App;