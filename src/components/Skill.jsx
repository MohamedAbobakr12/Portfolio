/**
 * @copyright 2024 ASSASSIN
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard.jsx";


const skillItem = [
    {
        imgSrc: 'imgs/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: 'imgs/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: 'imgs/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: 'imgs/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: 'imgs/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: 'imgs/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: 'imgs/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: 'imgs/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
];


const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard 
                                key={key}
                                imgSrc={imgSrc} 
                                label={label}
                                desc={desc} 
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

export default Skill
