import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
import { arrayIsValid, has } from "../../components/Utilities/ObjectUtils";

function About() {
    const { portfolioData } = useSelector((state) => state.root);
    // Destructure data.
    const { about } = portfolioData;
    const {
        _id,
        firstName,
        lastName,
        lottieURL,
        statement,
        description,
        description1,
        description2,
        certifications,
        achievements,
        skills,
        summary,
        social,
    } = about; // = abouts[0];
    const [skillsList, setSkillsList] = useState([]);
    const [skillCategories, setSkillCategories] = useState([]);
    const [skillCategoryFilter, setSkillCategoryFilter] = useState([]);

    /*  // Each skill has a structure like: 
        {
            "_id": "640d9f030e3b63c5c6959316",
            "index": 0,
            "showIndex": 0,
            "enabled": true,
            "name": "HTML5",
            "category": "Web Development",
            "tags": [
                "Front End Development"
            ],
            "proficiency": 7,
            "years": 6
        }
    */
    useEffect(() => {
        // On load, get all technologies used, for the filters. Doing it other ways results in an infinite loop??
        if (arrayIsValid(skills)) {
            // Case of being given all projects.
            let s = [];
            let names = [];
            let categories = [];
            skills.forEach((skill) => {
                if (has(skill, "name")) {
                    if (!names.includes(skill.name)) {
                        if (!categories.includes(skill.category)) {
                            categories.push(skill.category);
                        }
                        names.push(skill.name);
                        s.push(skill);
                    }
                }
            });
            if (s) {
                setSkillsList(s);
            }
            if (categories) {
                setSkillCategories(categories);
            }
        }
    }, []);

    // Debug.
    useEffect(() => {
        console.log(
            `About.js :: Debug :: `,
            "\n",
            "portfolioData = ",
            portfolioData,
            "\n",
            "about = ",
            about,
            "\n",
            "skills = ",
            skills,
            "\n",
            "skillsList = ",
            skillsList,
            "\n",
            "skillCategories = ",
            skillCategories,
            "\n",
            "skillCategoryFilter = ",
            skillCategoryFilter,
        );
    });

    // Accepts an individial skill object and returns an individual cell-list-item.
    const getCell = (parentIndex, skill, filterList, filterByKey) => {
        // console.log(
        //     "Projects.JS :: getCell :: Cell data = ",
        //     parentIndex,
        //     skill,
        //     filterList,
        //     filterByKey,
        //     portfolioData,
        // );
        if (has(skill, filterByKey)) {
            return (
                <div
                    className={`cell-list-item border-tertiary ${
                        filterList.includes(skill[filterByKey]) ? "hidden" : ""
                    }`}
                    key={`item-${parentIndex}-${skill.name}-${skill.index}`}
                    id={`item-${parentIndex}-${skill.name}-${skill.index}`}>
                    <h1 className={`cell-list-item-text text-white`}>
                        {skill.name}
                    </h1>
                </div>
            );
        }
        return "";
    };

    // Accepts an individial skill object and returns an individual cell-list-item.
    const getFilterCell = (parentIndex, filterElement, filterList, filterFunction, onclickEnabled) => {
        // if (has(filterElement, "name")) {
        if (filterElement && filterElement !== "") {
            // console.log(
            //     "Projects.JS :: getTechnologyCell :: Cell data = ",
            //     parentIndex,
            //     tech,
            //     onclickEnabled,
            //     portfolioData,
            //     "Tech.name = ", tech.name
            // );
            return (
                <div
                    className={`cell-list-item border border-tertiary ${
                        onclickEnabled &&
                        filterList.includes(filterElement)
                            ? "active"
                            : ""
                    }`}
                    key={`item-${parentIndex}-${filterElement}`}
                    id={`item-${parentIndex}-${filterElement}`}
                    onClick={
                        onclickEnabled
                            ? (event) => {
                                  if (
                                      filterList.indexOf(
                                          filterElement,
                                      ) > -1
                                  ) {
                                      // Already in filters list, remove it.
                                      filterFunction(
                                          filterList.filter(
                                              (filter) =>
                                                  filter !== filterElement,
                                          ),
                                      );
                                  } else {
                                      // Not in filters list, add it.
                                      filterFunction([
                                          ...filterList,
                                          filterElement,
                                      ]);
                                  }
                              }
                            : () => {}
                    }>
                    <h1 className={`cell-list-item-text text-white`}>
                        {filterElement}
                    </h1>
                </div>
            );
        }
        return "";
    };

    const getCellList = (data) => {
        // console.log(
        //     "Projects.JS :: getAllTechnologies :: Project data = ",
        //     data,
        //     portfolioData,
        // );
        if (arrayIsValid(skillsList, true)) {
            return (
                <div className="cell-list flex flex-wrap">
                    {skillsList.map((skill, index) => {
                        if ( has( skill, "category" ) )
                        {
                            if (skillCategoryFilter.length > 0) {
                                if (
                                    skillCategoryFilter.includes(skill.category)
                                ) {
                                    return "";
                                }
                            }
                            return getCell(
                                index,
                                skill,
                                skillCategoryFilter,
                                "category",
                            );
                        }
                        return '';
                    })}
                </div>
            );
        }
    };
    const getFilterCellList = (data) => {
        // console.log(
        //     "Projects.JS :: getAllTechnologies :: Project data = ",
        //     data,
        //     portfolioData,
        // );
        if (arrayIsValid(skillCategories, true)) {
            return (
                <div className="cell-list flex flex-wrap">
                    {skillCategories.map((category, index) => {
                        return getFilterCell(index, category, skillCategoryFilter, setSkillCategoryFilter, true);
                    })}
                </div>
            );
        }
    };

    return (
        <div>
            <SectionTitle title="About"></SectionTitle>
            <div className="flex w-full items-center justify-between sm:flex-col ">
                <div className="w-1/2 sm:w-full">
                    <lottie-player
                        src={/*lottieURL*/ "" || ""}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay></lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full px-10">
                    <p className="">{ arrayIsValid( description ) ? (
                        description.map( ( section, index ) =>
                        {
                            return (
                                <div className={`section-text-container`}>
                                    <h1 className={`section-text ${['text-highlightColor', 'text-highlightColor2', 'text-white'][index % 3]}`}>
                                        {section}
                                    </h1>
                                </div>
                            );
                    })
                    ) : ""}</p>
                </div>
            </div>

            <div className="py-5">
                <h1 className="text-highlightColor text-2xl">
                    Here are a few of my skills and the technologies i've been
                    working with:
                </h1>
                <div className="py-5">
                    {getFilterCellList(skillCategories)}
                    <hr className="pt-2 pb-2" />
                    {getCellList(skillsList)}
                </div>
            </div>
        </div>
    );
}

export default About;

/*
    const getSkills = (data) => {
        // console.log("getSkills :: data = ", data, portfolioData);
        if (arrayIsValid(data, true)) {
            return (
                <div className="cell-list flex flex-wrap">
                    {data.map((item, index) => {
                        // console.log(
                        //     "getSkills :: data = ",
                        //     data,
                        //     item,
                        //     portfolioData,
                        // );
                        return (
                            <div
                                className="cell-list-item border border-tertiary"
                                id={`skill-${index}`}>
                                <h1 className="cell-list-item-text text-white">
                                    {has(item, "name") ? item.name : ""}
                                </h1>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };

    // Accepts an individial skill object and returns an individual cell-list-item.
    const getCell = (parentIndex, skill, onclickEnabled) => {
        if (has(skill, "name")) {
            // console.log(
            //     "Projects.JS :: getTechnologyCell :: Cell data = ",
            //     parentIndex,
            //     tech,
            //     onclickEnabled,
            //     portfolioData,
            //     "Tech.name = ", tech.name
            // );
            return (
                <div
                    className={`cell-list-item border border-tertiary ${
                        skillCategoryFilter.includes(skill.name) ? "active" : ""
                    }`}
                    key={`item-${parentIndex}-${skill.name}-${skill.index}`}
                    id={`item-${parentIndex}-${skill.name}-${skill.index}`}
                    onClick={
                        onclickEnabled
                            ? (event) => {
                                  if (
                                      skillCategoryFilter.indexOf(skill.name) >
                                      -1
                                  ) {
                                      // Already in filters list, remove it.
                                      setSkillCategoryFilter(
                                          skillCategoryFilter.filter(
                                              (filter) =>
                                                  filter !== skill.category,
                                          ),
                                      );
                                  } else {
                                      // Not in filters list, add it.
                                      setSkillCategoryFilter([
                                          ...skillCategoryFilter,
                                          skill.category,
                                          // tech,
                                      ]);
                                  }
                              }
                            : () => {}
                    }>
                    <h1 className={`cell-list-item-text text-white`}>
                        {skill.name}
                    </h1>
                </div>
            );
        }
        return "";
    };

    // Accepts an individial skill object and returns an individual cell-list-item.
    const getFilterCell = (parentIndex, filterElement, onclickEnabled) => {
        // if (has(filterElement, "name")) {
        if (filterElement && filterElement !== "") {
            // console.log(
            //     "Projects.JS :: getTechnologyCell :: Cell data = ",
            //     parentIndex,
            //     tech,
            //     onclickEnabled,
            //     portfolioData,
            //     "Tech.name = ", tech.name
            // );
            return (
                <div
                    className={`cell-list-item border border-tertiary ${
                        onclickEnabled &&
                        skillCategoryFilter.includes(filterElement)
                            ? "active"
                            : ""
                    }`}
                    key={`item-${parentIndex}-${filterElement}`}
                    id={`item-${parentIndex}-${filterElement}`}
                    onClick={
                        onclickEnabled
                            ? (event) => {
                                  if (
                                      skillCategoryFilter.indexOf(
                                          filterElement,
                                      ) > -1
                                  ) {
                                      // Already in filters list, remove it.
                                      setSkillCategoryFilter(
                                          skillCategoryFilter.filter(
                                              (filter) =>
                                                  filter !== filterElement,
                                          ),
                                      );
                                  } else {
                                      // Not in filters list, add it.
                                      setSkillCategoryFilter([
                                          ...skillCategoryFilter,
                                          filterElement,
                                      ]);
                                  }
                              }
                            : () => {}
                    }>
                    <h1 className={`cell-list-item-text text-white`}>
                        {filterElement}
                    </h1>
                </div>
            );
        }
        return "";
    };

    const getCellList = (data) => {
        console.log(
            "Projects.JS :: getAllTechnologies :: Project data = ",
            data,
            portfolioData,
        );
        if (arrayIsValid(skillsList, true)) {
            return (
                <div className="cell-list flex flex-wrap">
                    {skillsList.map((skill, index) => {
                        if (has(skill, "category")) {
                            if (skillCategoryFilter.includes(skill.category)) {
                                return "";
                            }
                        }
                        return getCell(index, skill, false);
                    })}
                </div>
            );
        }
    };
    const getFilterCellList = (data) => {
        console.log(
            "Projects.JS :: getAllTechnologies :: Project data = ",
            data,
            portfolioData,
        );
        if (arrayIsValid(skillCategories, true)) {
            return (
                <div className="cell-list flex flex-wrap">
                    {skillCategories.map((category, index) => {
                        return getFilterCell(index, category, true);
                    })}
                </div>
            );
        }
    };

import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function About() {
    const { portfolioData } = useSelector((state) => state.root);
    // Destructure data.
    const { about } = portfolioData;
    const { skills, lottieURL, description1, description2 } = about; // = abouts[0];

    return (
        <div>
            <SectionTitle title="About"></SectionTitle>
            <div className="flex w-full items-center justify-between sm:flex-col ">
                <div className="w-1/2 sm:w-full">
                    <lottie-player
                        src={lottieURL || ""}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay></lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full px-10">
                    <p className="text-white">{description1 || ""}</p>
                    <p className="">{description2 || ""}</p>
                </div>
            </div>

            <div className="py-5">
                <h1 className="text-highlightColor text-2xl">
                    Here are a few of my skills and the technologies i've been
                    working with:
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
        </div>
    );
}

export default About;

*/
