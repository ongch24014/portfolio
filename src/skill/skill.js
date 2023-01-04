import React from "react";
import "./skill.css";
import { ReactComponent as ReactLogo } from "../image/icon/react.svg"
import { ReactComponent as AngularLogo } from "../image/icon/angular.svg"
import { ReactComponent as HtmlLogo } from "../image/icon/html.svg"
import { ReactComponent as JSLogo } from "../image/icon/javascript.svg"
import { ReactComponent as CssLogo } from "../image/icon/css.svg"
import 'animate.css';

export default class Skill extends React.Component {
    constructor(props) {
        super(props);
        // this.function = this.function.bind(this);
        // this.state;

        function importAll(r) {
            let images = {};
            r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return null });
            return images;
        }

        this.images = importAll(require.context('../image/icon', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (
            <div className={`skill ${this.props.dark ? " dark" : ''}`} id="skill">
                <span className="main-title animate__animated">Skills</span>

                <div className="skill-list animate__animated">
                    <div className="b-react">
                        <ReactLogo className="skill-logo" /> <span>React</span>
                    </div>
                    <div className="b-angular">
                        <AngularLogo className="skill-logo" /> <span>Angular</span>
                    </div>
                    <div className="b-html">
                        <HtmlLogo className="skill-logo" /> <span>HTML</span>
                    </div>
                    <div className="b-css">
                        <CssLogo className="skill-logo" /> <span>CSS</span>
                    </div>
                    <div className="b-js">
                        <JSLogo className="skill-logo" /> <span>JavaScript</span>
                    </div>
                    <div className="b-ts">
                        <img src={this.images['typescript.png']} className="skill-logo" alt="typescript" /> <span>TypeScript</span>
                    </div>
                    <div className="b-go">
                        <img src={this.images['go.png']} className="skill-logo" alt="go" /> <span>Go</span>
                    </div>
                    <div className="b-python">
                        <img src={this.images['python.png']} className="skill-logo" alt="python" /> <span>Python</span>
                    </div>
                </div>
            </div>
        )
    }
}
