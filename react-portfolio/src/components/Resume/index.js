import React from "react";

function Resume() {
    return (
        <section>
            <div className="resume">
                <h1 id="about">Resume</h1>
                <div className="logos">
                <a style={{ width: "30%" }} href="https://www.linkedin.com/in/rotimi-a-ezekiel-9378ba84/" target="_blank"> <img src={linkinlogo} style={{ width: "20%" }} alt="logo"/></a>
                </div>
                <div className="resume">
                    <ul>
                        <p>Front End Proficiencies</p>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Handlebar
                        </li>
                        <li>
                            REST API Development (front-end)
                        </li>
                    </ul>
                    <ul>
                        <p>Back End Proficiencies</p>
                        <li>
                            Node.js
                        </li>
                        <li>
                            SQL
                        </li>
                        <li>
                            Mong
                        </li>
                        <li>
                            API Development (backend)
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Resume;