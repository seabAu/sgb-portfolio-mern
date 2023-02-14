import React from "react";

function Header() {
    return (
        <div className="page-header ">
            <div className="page-header-left">
                <div className="page-header-icon-container">
                    <img
                        className="page-header-icon"
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/img/portfolio_icon.jpg"
                        }
                        alt="User Icon"></img>
                </div>
                <div className="page-header-title-container">
                    <div className="page-header-title p-5 flex flex-row justify-left items-center align-middle text-4xl font-semibold">
                        <h1 className="text-textColor ">S</h1>
                        <h1 className="text-highlightColor ">G</h1>
                        <h1 className="text-textColor ">B</h1>
                    </div>
                </div>
            </div>
            <div className="page-header-center">
                <a href="#" className="button portfolio-button">
                    <h1 className="button-text">Download Resume (PDF)</h1>
                    <i className="pdf-icon"></i>
                </a>
            </div>
            <div className="page-header-right">
                <div className="page-header-nav-container">
                    <div>
                        <button
                            className="button admin-button text-highlightColor"
                            onClick={() => {
                                window.location.href = "/admin-login";
                            }}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
