import React from "react";
import "./about.css";

export default class About extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.function = this.function.bind(this);
    //     // this.state;
    // }

    render() {
        return (
            <div className={`about ${this.props.dark ? " dark" : ''}`} id="about">
                <h2>Hello there ,</h2>
                <h1>I'm <span style={{ color: "rgb(255 77 128)" }}>Ong Chun Heng</span> ,</h1>
                <h3>full-stack developer .</h3>

                <section className="desc">
                    <span>
                        I'm a software developer who loves to create and implement the latest technologies that provide a wonderful digital experience for users.
                    </span>
                    <br />
                    <br />
                    <span>
                        Currently I'm working on developing Malaysia's first Digital Bank at Grab.
                    </span>
                </section>
            </div>
        )
    }
}
