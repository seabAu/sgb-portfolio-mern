import React from "react";

function SectionTitle ( { title, scale } )
{
    // Select the scale class based on the scale value provided. 
    var scaleClass;
    switch (scale) {
        case "1":
            scaleClass = "text-4xl";
            break;
        case "2":
            scaleClass = "text-3xl";
            break;
        case "3":
            scaleClass = "text-2xl";
            break;
        case "4":
            scaleClass = "text-1xl";
            break;
        case "5":
            scaleClass = "text-1xl";
            break;
        case "6":
            scaleClass = "text-xl";
            break;
        default:
            scaleClass = "text-3xl";
            break;
    }
    return (
        <div className="section-title">
            <h1 className={`section-title-text ${scaleClass} text-highlightColor`}>
                {title}
            </h1>
            <div className="section-title-bar"></div>
        </div>
    );
}

export default SectionTitle;
