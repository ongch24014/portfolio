import React from "react";
import "./contact.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default class Contact extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.function = this.function.bind(this);
    //     // this.state;
    // }

    render() {
        return (
            <div className={`contact ${this.props.dark ? " dark" : ''}`} id="contact">
                <span className="main-title animate__animated">Contact</span>

                <section className="contact-list">
                    <LinkedInIcon className="c-icon" onClick={this.navigateUrl.bind(this, 'https://www.linkedin.com/in/ongch31/')}></LinkedInIcon>
                    <GitHubIcon className="c-icon" onClick={this.navigateUrl.bind(this, 'https://github.com/ongch24014')}></GitHubIcon>
                    <InstagramIcon className="c-icon" onClick={this.navigateUrl.bind(this, 'https://www.instagram.com/chch_97')}></InstagramIcon>
                </section>
            </div>
        )
    }

    navigateUrl(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}
