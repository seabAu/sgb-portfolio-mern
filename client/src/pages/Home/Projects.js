import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
// import { projects } from "../../resources/projects";
// Implement skills filter
// Implement projects grid
// Create projects on new codepen account
function Projects() {
    const { portfolioData } = useSelector((state) => state.root);
    // Destructure data.
    const { projects, about } = portfolioData;
    const { skills } = about; // = abouts[0];
    return (
        <div>
            <SectionTitle title="Projects"></SectionTitle>
            <div className="py-5">
                <h1 className="text-highlightColor text-2xl">
                    Here are a few examples of my skills and the technologies
                    i've been working with:
                </h1>
                <h1 className="text-white">
                    Click on a skill to filter projects
                </h1>
                <div className="cell-list flex flex-wrap gap-5 mt-5">
                    {skills.map((skill, index) => (
                        <div className="cell-list-item border border-tertiary">
                            <h1 className="cell-list-item-text text-white">
                                {skill}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid-card-container">
                {projects.map((project) => (
                    <div className="grid-card text-white shadow ">
                        <div className="grid-card-header">
                            <h1 className="text-xl font-bold">
                                {project.title}
                            </h1>
                        </div>
                        <div className="grid-card-body">
                            <div className="grid-card-iframe">
                                <iframe
                                    src={project.link}
                                    title={project.title}
                                    style={{ border: "none" }}
                                    width="100%"
                                    height="400px"
                                    frameborder="0"
                                    scrolling="no"
                                    loading="lazy"
                                    allowtransparency="true"
                                    allowfullscreen="true"></iframe>
                            </div>
                            <div className="grid-card-body-text">
                                <h1 className="">{project.description}</h1>
                            </div>
                            Technologies used:{" "}
                            <div className="cell-list">
                                {project.technologies.map((technology) => (
                                    <div className="cell-list-item">
                                        <h1 className="cell-list-item-text">
                                            {technology}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid-card-footer items-end">
                            <a href={project.link} className="button mt-2">
                                See It Here
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;

/*

function Projects() {
    const { portfolioData } = useSelector((state) => state.root);
    // Destructure data.
    const { projects, about } = portfolioData;
    const { skills } = about; // = abouts[0];
    return (
        <div>
            <SectionTitle title="Projects"></SectionTitle>
            <div className="py-5">
                <h1 className="text-highlightColor text-2xl">
                    Here are a few of my skills and the technologies i've been
                    working with:
                </h1>
                <h1 className="text-white">
                    Click on a skill to filter projects
                </h1>
                <div className="cell-list flex flex-wrap gap-5 mt-5">
                    {skills.map((skill, index) => (
                        <div className="cell-list-item border border-tertiary">
                            <h1 className="cell-list-item-text text-white">
                                {skill}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid-card-container">
                {projects.map((project) => (
                    <div className="grid-card text-white shadow ">
                        <div className="grid-card-header">
                            <h1 className="text-xl font-bold">
                                {project.title}
                            </h1>
                        </div>
                        <div className="grid-card-body">
                            <div className="grid-card-image">
                                <img
                                    className="h-60 w-80"
                                    src={project.image}
                                    alt=""></img>
                            </div>
                            <div className="grid-card-iframe">
                                <iframe
                                    src={project.link}
                                    title={project.title}
                                    style={{ border: "none" }}
                                    width="100%"
                                    height="400px"
                                    frameborder="0"
                                    scrolling="no"
                                    loading="lazy"
                                    allowtransparency="true"
                                    allowfullscreen="true"></iframe>
                            </div>
                            <div className="grid-card-body-text">
                                <h1 className="">{project.context}</h1>
                                <h1 className="">{project.description}</h1>
                            </div>
                            Technologies used:{" "}
                            <div className="cell-list">
                                {project.technologies.map((technology) => (
                                    <div className="cell-list-item">
                                        <h1 className="cell-list-item-text">
                                            {technology}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid-card-footer items-end">
                            <a href={project.link} className="button mt-2">
                                See It Here
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

            <div className="flex sm:flex-col py-10 gap-10">
                <div className="flex flex-col gap-5 border-l-2 border-[#bdacac] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {projects.map((project, index) => (
                        <div
                            className="cursor-pointer"
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}>
                            <h1
                                className={`text-xl px-5 py-3 sm:w-40 ${
                                    selectedItemIndex === index
                                        ? "text-highlightColor2 border-highlightColor2 border-l-4 -ml-[2px] bg-[#3f5e809b]"
                                        : "text-white"
                                }`}>
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-10 sm:flex-col">
                    <img
                        src={projects[selectedItemIndex].image}
                        alt=""
                        className="h-60 w-72"
                    />
                    <div className="flex flex-col gap-5">
                        <h1 className="text-highlightColor text-xl">
                            {projects[selectedItemIndex].title}
                        </h1>
                        <p className="text-highlightColor2">
                            {projects[selectedItemIndex].description}
                        </p>
                        <p className="text-white">
                            {projects[selectedItemIndex].context}
                        </p>
                    </div>
                </div>
            </div>
*/