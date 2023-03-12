import React from "react";
import Icons from "./Icons";

function Footer() {
    return (
        <div className="page-footer ">
            <div className="page-footer-content">
                <div className="page-footer-links">
                    <Icons/>
                </div>
                <div className="page-footer-credit">
                    <h1 className="text-white">
                        <span className="text-highlightColor2">
                            Sean G Brown 2023
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
