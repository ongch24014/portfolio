import React from "react";
import "./navbar.css";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({ dark, current, change, isDesktopOrLaptop }) {
    const drawerStyle = {
        color: "white",
        backgroundColor: "rgb(32 13 33 / 88%)",
        width: "150px",
        gap: "15px",
        padding: "10px",
        fontSize: "18px",
        paddingTop: "25px",
        fontFamily: "Silkscreen"
    }

    // let selected = 'about';

    function changeState(state) {
        if (!isDesktopOrLaptop) {
            setIsToggled(false)
        }
        const element = document.getElementById(state);
        window.scrollTo({ top: (element.offsetTop - 100), behavior: 'smooth' });
        change(state);
    }

    const [isToggled, setIsToggled] = React.useState(false);

    // const classes = "navbar" + (dark ? " dark" : '');
    return (
        <div className={`navbar ${dark ? " dark" : ''}`} id="navbar">
            <div>
                {/* Logo */}
            </div>

            {isDesktopOrLaptop ?
                <div className="nav">
                    <span className={current === 'about' ? 'nav-sel' : ''} onClick={() => { changeState('about') }}>About</span>
                    <span className={current === 'skill' ? 'nav-sel' : ''} onClick={() => { changeState('skill') }}>Skills</span>
                    <span className={current === 'experience' ? 'nav-sel' : ''} onClick={() => { changeState('experience') }}>Experience</span>
                    <span className={current === 'projects' ? 'nav-sel' : ''} onClick={() => { changeState('projects') }}>Projects</span>
                    <span className={current === 'contact' ? 'nav-sel' : ''} onClick={() => { changeState('contact') }}>Contact</span>
                </div> :
                <div className="burger">
                    <IconButton style={{ color: "white" }} onClick={() => { setIsToggled(true) }}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="right"
                        open={isToggled}
                        onClose={() => { setIsToggled(false) }}
                        PaperProps={{
                            sx: drawerStyle
                        }}
                        className="drawer"
                    >
                        <span className={current === 'about' ? 'nav-sel' : ''} onClick={() => { changeState('about') }}>About</span>
                        <span className={current === 'skill' ? 'nav-sel' : ''} onClick={() => { changeState('skill') }}>Skills</span>
                        <span className={current === 'experience' ? 'nav-sel' : ''} onClick={() => { changeState('experience') }}>Experience</span>
                        {/* <span className={current === 'project' ? 'nav-sel' : ''} onClick={() => {changeState('project')}}>Projects</span> */}
                        <span className={current === 'contact' ? 'nav-sel' : ''} onClick={() => { changeState('contact') }}>Contact</span>
                    </Drawer>
                </div>}
        </div>
    )

}
