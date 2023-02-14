import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
// import { experiences } from "../../resources/experiences";

function Experiences ()
{
    const { portfolioData } = useSelector((state) => state.root);
    // Destructure data.
    const { experiences } = portfolioData;
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Experience"></SectionTitle>

            <div className="flex sm:flex-col py-10 gap-10">
                <div className="flex flex-col gap-5 border-l-2 border-[#bdacac] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {experiences.map((experience, index) => (
                        <div
                            className="cursor-pointer"
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}>
                            <h1
                                className={`text-xl px-5 ${
                                    selectedItemIndex === index
                                        ? "text-highlightColor2 border-highlightColor2 border-l-4 -ml-[2px] bg-[#3f5e809b] py-3 sm:w-40"
                                        : "text-white"
                                }`}>
                                {experience.period}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-highlightColor text-2xl">
                        {experiences[selectedItemIndex].title}
                    </h1>
                    <h1 className="text-highlightColor2 text-2xl">
                        {experiences[selectedItemIndex].company}
                    </h1>
                    <p className='text-white'>
                        {experiences[selectedItemIndex].description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experiences;
