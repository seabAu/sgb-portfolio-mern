// Import system stuff
import React from "react";
import { useSelector } from "react-redux";

// Import components
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import { Tabs } from "antd";

// Import UI components
// import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    const { portfolioData } = useSelector((state) => state.root);
    const items = [
        {
            key: "1",
            label: `Intro`,
            children: <Intro />,
        },
        {
            key: "2",
            label: `About`,
            children: <About />,
        },
        {
            key: "3",
            label: `Projects`,
            children: <Projects />,
        },
        {
            key: "4",
            label: `Experience`,
            children: <Experiences />,
        },
        {
            key: "5",
            label: `Education`,
            children: <Education />,
        },
        {
            key: "6",
            label: `Contact`,
            children: <Contact />,
        },
    ];

    return (
        <div className="">
            {portfolioData && (
                <div className="page-container">
                    <Header></Header>
                    <div className="page-content px-20 sm:px-5 ">
                        <div className="portfolio-tabs-bar ">
                            <Tabs
                                defaultActiveKey="1"
                                items={items}
                                tabPosition={"top"}
                                type="card"
                                size={"large"}
                                style={{ margin: 10 }}
                                // onChange={onChange}
                            />
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
            )}
        </div>
    );
}

export default Home;

/*

                <div className="px-20 sm:px-5 ">
                    <Intro></Intro>
                    <About></About>
                    <Experiences></Experiences>
                    <Projects></Projects>
                    <Courses></Courses>
                    <Contact></Contact>
                    <Footer></Footer>
                    <SocialIcons></SocialIcons>
                </div>
*/
