import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import Tabs from "../../components/Tabs/Tabs";
import { arrayIsValid } from "../../components/Utilities/ObjectUtils";
// import { experiences } from "../../resources/experiences";

function Experiences (){
    const { portfolioData } = useSelector((state) => state.root);
    // Destructure data.
    const { experiences } = portfolioData;
    
    const getExperiences = (data) => {
        console.log("getExperiences :: data = ", data, portfolioData);
        if ( arrayIsValid( data, true ) )
        {
            return experiences.map((experience, index) => {
                return (
                    <div
                        label={`${experience.company}`}
                        sublabel={`${experience.period}`}
                        id={experience._id}
                        index={index}>
                        <h1 className="header-section">{experience.title}</h1>
                        <div className="flex-spread-box">
                            <h1 className="header-subsection">
                                {experience.company}
                            </h1>
                            <h2 className="text-highlightColor text-xl">
                                {experience.period}
                            </h2>
                        </div>
                        <h2 className="text-highlightColor text-xl">
                            {experience.location}
                        </h2>
                        <p className="text-white">{experience.description}</p>
                        <ul className="list">
                            {experience.duties.map((duty) => (
                                <li className="list-item">
                                    <h1 className="list-item-text">• {duty}</h1>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            });
        }
    };

    return (
        <>
            <SectionTitle title="Experience"></SectionTitle>
            {portfolioData && (
                <Tabs
                    type={"top"}
                    rounded={true}
                    centered={true}
                    padContent={true}
                    fillArea={true}
                    roundedNav={true}
                    contentBoxShadow={true}
                    navBoxShadow={true}>
                    {getExperiences(experiences)}
                </Tabs>
            )}
        </>
    );
}

export default Experiences;
