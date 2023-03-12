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
                        alt="User Icon"
                        onClick={() => {
                            if (window.location.href === "/") {
                                console.log(localStorage.getItem("token"));
                                if (!localStorage.getItem("token")) {
                                    window.location.href = "/admin-login";
                                } else {
                                    window.location.href = "/admin";
                                }
                            } else {
                                window.location.href = "/";
                            }
                        }}></img>
                </div>
                <div className="page-header-title-container">
                    <div className="page-header-title">
                        <h1 className="text-textColor ">S</h1>
                        <h1 className="text-highlightColor ">G</h1>
                        <h1 className="text-textColor ">B</h1>
                    </div>
                </div>
            </div>
            <div className="page-header-center"></div>
            <div className="page-header-right">
                <div className="page-header-nav-container flex-spread-box">
                    <div className="flex-row">
                        <button href="#" className="button">
                            <h1 className="button-text">
                                Download Resume (PDF)
                            </h1>
                            <i className="pdf-icon"></i>
                        </button>

                        <button
                            className="button"
                            onClick={ () =>
                            {
                                if ( localStorage.getItem( "token" ) == null )
                                {
                                    // NOT logged in, send user to the login screen.
                                    window.location.href = "/admin-login";
                                }
                                else
                                {
                                    // IS logged in, return user to the front page.
                                    localStorage.removeItem("token");
                                    window.location.href = "/admin-login";
                                }
                            }}>
                            {localStorage.getItem("token") == null ? 'Log In' : 'Log Out'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

/*
<button
    className="button text-highlightColor"
    onClick={() => {
        window.location.href = "/admin-login";
    }}>
    Log In
</button>*/