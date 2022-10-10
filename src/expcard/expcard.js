import React from "react";
import "./expcard.css";
import PlaceIcon from '@mui/icons-material/Place';

export default class Expcard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="exp-card animate__animated">
                <section className="header">
                    <h2>{this.props.title} @ <span style={{ color: "rgb(234 105 164)" }}>{this.props.company}</span></h2>
                    <h4>{this.props.duration}</h4>
                </section>

                <section className="work-location">
                    <PlaceIcon sx={{ color: "#db72a2" }}></PlaceIcon>
                    <span>{this.props.location}</span>
                </section>

                <section className="work-desc">
                    <ul>
                        {
                            this.props.description.map((des, index) => {
                                return (
                                    <li key={index}>{des}</li>
                                )
                            })
                        }
                    </ul>
                </section>

                <section className="exp-skills">
                    {
                        this.props.skills.map((skill, index) => {
                            return (
                                <div key={index}>{skill}</div>
                            )
                        })
                    }
                </section>
            </div>
        )
    }
}
