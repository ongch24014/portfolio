import React from "react";
import "./experience.css";
import { experienceData } from "./exp-data";
import Expcard from "../expcard/expcard";


export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        // this.function = this.function.bind(this);
        // this.state;
    }

    render() {
        return (
            <div className={`experience ${this.props.dark ? " dark" : ''}`} id="experience">
                <span className="main-title animate__animated" style={{ textAlign: "center" }} id="experience1">Experience</span>


                <div className="experience-list">
                    {
                        experienceData.map((exp, index) => {
                            return (
                                <Expcard
                                    key={index}
                                    {...exp}
                                />
                            )
                        })
                    }
                </div>

                <div className="curve"></div>
            </div>
        )
    }
}
