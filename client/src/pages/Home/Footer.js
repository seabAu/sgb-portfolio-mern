import React from "react";

function Footer() {
    return (
        <div className="page-footer ">
            <div className="flex flex-col justify-center items-center ">
                <div className="h-[1px] w-[90%] bg-gray-700 "></div>
            </div>
            <div className="flex flex-col justify-center items-center py-5">
                <div className="flex flex-row justify-center items-center gap-5">
                    <a href="mailto:sean.george.brown@gmail.com">
                        {" "}
                        <i className="social-icon ri-mail-line text-gray-400 text-2xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sean-brown-116b4b79/">
                        {" "}
                        <i className="social-icon ri-linkedin-box-line text-gray-400 text-2xl"></i>
                    </a>
                    <a href="https://github.com/seabAu">
                        {" "}
                        <i className="social-icon ri-github-line text-gray-400 text-2xl"></i>
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center opacity-70 py-5">
                    <h1 className="text-white">
                        Designed by{" "}
                        <span className="text-highlightColor2">
                            {" "}
                            Sean G Brown
                        </span>
                    </h1>
                    <h1 className="text-white">
                        Original by
                        <span className="text-highlightColor2">
                            {" "}
                            K.Sathyaprakash Reddy
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Footer;
