import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import Tabs from "../../components/Tabs/Tabs";
import { arrayIsValid } from "../../components/Utilities/ObjectUtils";
// import { courses } from "../../resources/courses";

function Education() {
    // Destructure data.
    const { portfolioData } = useSelector((state) => state.root);
    const { educations } = portfolioData;

    const getEducations = ( data ) =>
    {
        console.log( "getEducations :: data = ", data, portfolioData );
        if ( arrayIsValid( data, true ) )
        {
            return data.map((degree, index) => {
                // console.log( degree );
                return (
                    <div
                        label={degree.degree}
                        id={degree._id}
                        index={index}>
                        <h1 className="text-highlightColor text-2xl">
                            {degree.degree}
                        </h1>
                        <h1 className="text-highlightColor text-xl">
                            {degree.location}
                        </h1>
                        <img
                            src={degree.image}
                            alt=""
                            className="w-80"
                        />
                    </div>
                );
            });
        }
    }

    return (
        <>
            <SectionTitle title="Education"></SectionTitle>

            {portfolioData && (
                <Tabs
                    type="top"
                    rounded={true}
                    centered={true}
                    padContent={true}
                    fillArea={true}
                    roundedNav={true}
                    contentBoxShadow={true}
                    navBoxShadow={true}>
                    {getEducations(educations)}
                </Tabs>
            )}
        </>
    );
}

export default Education;

/*
    import React from "react";
    import { useSelector } from "react-redux";
    import SectionTitle from "../../components/SectionTitle";
    // import { courses } from "../../resources/courses";

    function Education() {
        // Destructure data.
        const { portfolioData } = useSelector((state) => state.root);
        const { educations } = portfolioData;

        const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
        return (
            <div>
                <SectionTitle title="Education"></SectionTitle>

                <div className="tabs-container tabs-left">
                    <div className="tabs-nav-list">
                        {educations.map((degree, index) => (
                            <div
                                className={`tab-nav-item ${
                                    selectedItemIndex === index ? "tab-active" : ""
                                }`}
                                onClick={() => {
                                    setSelectedItemIndex(index);
                                }}>
                                <h1 className="tab-nav-item-label">
                                    {degree.degree}
                                </h1>
                            </div>
                        ))}
                    </div>
                    <div className="tab-content-container">
                        <div className="tab-content">
                            <div className="flex flex-col gap-5">
                                <h1 className="text-highlightColor text-xl">
                                    {educations[selectedItemIndex].location}
                                </h1>
                                <p className="text-highlightColor2">
                                    {educations[selectedItemIndex].degree}
                                </p>
                            </div>
                            <img
                                src={educations[selectedItemIndex].image}
                                alt=""
                                className="w-80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default Education;

    import React from "react";
    import { useSelector } from "react-redux";
    import SectionTitle from "../../components/SectionTitle";
    // import { courses } from "../../resources/courses";

    function Courses() {
        // Destructure data.
        const { portfolioData } = useSelector((state) => state.root);
        const { educations } = portfolioData;

        const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
        return (
            <div>
                <SectionTitle title="Education"></SectionTitle>

                <div className="tabs-container">
                    <div className="tabs-list">
                        {educations.map((degree, index) => (
                            <div
                                className="tab"
                                onClick={() => {
                                    setSelectedItemIndex(index);
                                }}>
                                <h1
                                    className={`text-xl px-5 py-3 sm:w-40 ${
                                        selectedItemIndex === index
                                            ? "text-highlightColor2 border-highlightColor2 border-l-4 -ml-[2px] bg-[#3f5e809b] "
                                            : "text-white "
                                    }`}>
                                    {degree.location}
                                </h1>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-10 sm:flex-col">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-highlightColor text-xl">
                                {educations[selectedItemIndex].location}
                            </h1>
                            <p className="text-highlightColor2">
                                {educations[selectedItemIndex].degree}
                            </p>
                        </div>
                        <img
                            src={educations[selectedItemIndex].image}
                            alt=""
                            className="w-80"
                        />
                    </div>
                </div>
            </div>
        );
    }

    export default Courses;

*/