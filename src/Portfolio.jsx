import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className=" container-custom py-5">
                {/* Header Section */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Jhil Chatterjee</h1>
                    <p className="fs-4">
                        Aspiring UI/UX Designer | B.Tech in IT
                    </p>
                    <p className="">+91 81010 99356</p>
                    <a href="mailto:jhilchatterjee2004@gmail.com">
                        jhilchatterjee2004@gmail.com
                    </a>
                    <p className="text-muted">
                        Enthusiastic UI/UX designer passionate about creating
                        intuitive and visually appealing user experiences.
                        Blending technical knowledge with creative design
                        principles.
                    </p>
                </div>

                {/* Projects Section */}
                <div className="row p-5">
                    <div>
                        <h2 className="fw-bold mb-4">Projects</h2>
                        <div className="row">
                            {/* Project 1 */}
                            <div className="col-lg-4 col-sm-12 mb-4">
                                <div
                                    className="card project"
                                    data-aos="fade-up"
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Future Intern Tasks
                                        </h5>
                                        <p className="card-text text-muted">
                                            A series of tasks completed as part
                                            of the Future Intern program.
                                        </p>
                                        <a
                                            href="https://github.com/jhil-chatterjee08/Future_Intern-tasks"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-custom"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="col-lg-4 col-sm-12 mb-4">
                                <div
                                    className="card project"
                                    data-aos="fade-up"
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            UI Design 2
                                        </h5>
                                        <p className="card-text text-muted">
                                            A collection of UI design prototypes
                                            and experiments.
                                        </p>
                                        <a
                                            href="https://github.com/jhil-chatterjee08/ui_design2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-custom"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="col-lg-4 col-sm-12 mb-4">
                                <div
                                    className="card project"
                                    data-aos="fade-up"
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            UI Design
                                        </h5>
                                        <p className="card-text text-muted">
                                            Showcasing various UI design
                                            concepts and prototypes.
                                        </p>
                                        <a
                                            href="https://github.com/jhil-chatterjee08/ui_design"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-custom"
                                        >
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer bg-dark text-light py-4 mt-5">
                <div className="container text-center">
                    <p className="mb-2">
                        &copy; 2025 Jhil Chatterjee. All Rights Reserved.
                    </p>
                    <div className="social-links">
                        <a
                            href="mailto:jhil.chatterjee@gmail.com"
                            className="me-3"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a
                            href="https://github.com/jhil-chatterjee08"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="me-3"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jhil08?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Portfolio;
