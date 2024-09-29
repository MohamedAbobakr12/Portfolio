/**
 * @copyright 2024 ASSASSIN
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard.jsx";


const works = [
    {
        imgSrc: 'imgs/project-1.jpg',
        title: 'Full stack music app',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
        imgSrc: 'imgs/project-2.jpg',
        title: 'Free stock photo app',
        tags: ['API', 'SPA'],
        projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
        imgSrc: 'imgs/project-3.jpg',
        title: 'Recipe app',
        tags: ['Development', 'API'],
        projectLink: ''
    },
    {
        imgSrc: 'imgs/project-4.jpg',
        title: 'Real state website',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
        imgSrc: 'imgs/project-5.jpg',
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
        imgSrc: 'imgs/project-6.jpg',
        title: 'vCard Personal portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
];


const Work = () => {
    return (
        <section 
            id="work" 
            className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard 
                            key={key} 
                            imgSrc={imgSrc} 
                            title={title} 
                            tags={tags} 
                            projectLink={projectLink} 
                            classes="reveal-up"
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Work;
