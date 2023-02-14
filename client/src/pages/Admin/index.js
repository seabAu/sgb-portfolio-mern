import React, { useEffect } from "react";
import Header from "../../components/Header";
import AdminAbout from "./AdminAbout";
import AdminIntro from "./AdminIntro";
import AdminEducations from "./AdminEducations";
import AdminProjects from "./AdminProjects";
import AdminExperiences from "./AdminExperiences";
import AdminContact from "./AdminContact";
import { useSelector } from "react-redux";

// Ant components
import { Tabs } from 'antd';
// import { TabsProps } from "antd";
// const { TabPane } = Tabs;

function Admin() {
    const { portfolioData } = useSelector( ( state ) => state.root );
    
    // Make sure a visitor is successfully logged in before letting them access any page other than "/admin-login".
    useEffect( () =>
    {
        if ( !localStorage.getItem( "token" ) )
        {
            window.location.href = "/admin-login";
        }
    }, [] );

    const items = [
        {
            key: "1",
            label: `Intro`,
            children: <AdminIntro />,
        },
        {
            key: "2",
            label: `About`,
            children: <AdminAbout />,
        },
        {
            key: "3",
            label: `Experiences`,
            children: <AdminExperiences />,
        },
        {
            key: "4",
            label: `Projects`,
            children: <AdminProjects />,
        },
        {
            key: "5",
            label: `Courses`,
            children: <AdminEducations />,
        },
        {
            key: "6",
            label: `Contact`,
            children: <AdminContact />,
        },
    ];

    return (
        <div className="">
            <Header></Header>
            <div className="admin-panel-content-container flex gap-10 items-center justify-between px-5 pt-2">
                <div className="flex gap-10 items-center">
                    <h1 className="admin-panel-content-title text-3xl px-2 mt-5 text-primary">
                        Portfolio Admin Panel
                    </h1>
                    <div className="w-60 h-[1px] bg-tertiary"></div>
                </div>
                <button className="admin-button text-primary" onClick={ () =>
                {
                    localStorage.removeItem( "token" );
                    window.location.href = "/admin-login";
                }}>Log Out</button>
            </div>
            {portfolioData && (
                <div className="admin-tabs-bar mt-5 px-5 pb-10">
                    <Tabs
                        defaultActiveKey="1"
                        items={items}
                        tabPosition={"left"}
                        type="card"
                        size={"small"}
                        style={{ margin: 0 }}
                        // onChange={onChange}
                    />
                </div>
            )}
        </div>
    );
}

export default Admin;
