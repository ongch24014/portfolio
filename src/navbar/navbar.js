import React from "react";
import "./navbar.css";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        // this.function = this.function.bind(this);
        // this.state;
        this.selected = 'about';
    }

    change(state) {
        const element = document.getElementById(state);
        window.scrollTo({ top: (element.offsetTop - 100), behavior: 'smooth' });
        this.props.change(state);
    }

    render() {
        // const classes = "navbar" + (this.props.dark ? " dark" : '');
        return (
            <div className={`navbar ${this.props.dark ? " dark" : ''}`} id="navbar">
                <div>
                    {/* Logo */}
                </div>

                <div className="nav">
                    <span className={this.props.current === 'about' ? 'nav-sel' : ''} onClick={this.change.bind(this, 'about')}>About</span>
                    <span className={this.props.current === 'skill' ? 'nav-sel' : ''} onClick={this.change.bind(this, 'skill')}>Skills</span>
                    <span className={this.props.current === 'experience' ? 'nav-sel' : ''} onClick={this.change.bind(this, 'experience')}>Experience</span>
                    {/* <span className={this.props.current === 'project' ? 'nav-sel' : ''} onClick={this.change.bind(this, 'project')}>Projects</span> */}
                    <span className={this.props.current === 'contact' ? 'nav-sel' : ''} onClick={this.change.bind(this, 'contact')}>Contact</span>
                </div>
            </div>
        )
    }
}
