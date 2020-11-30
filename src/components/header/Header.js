import React from 'react';
import { Link } from "react-scroll";

const Header = props => (
    <header id="home">
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#hide-nav" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
            </ul>
        </nav>
        <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">I'm {props.name}.</h1>
                <h3>{props.intro} Let's <a
                    className="smoothscroll" href="#about">start scrolling </a>
                            and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                <hr />
                <ul className="social">
                    {props.socialMedia.twitter && <li><a href={props.socialMedia.twitter}>
                        <i className="fa fa-twitter" /></a></li>}
                    {props.socialMedia.linkedIn && <li><a href={props.socialMedia.linkedIn}>
                        <i className="fa fa-linkedin" /></a></li>}
                    {props.socialMedia.instagram && <li><a href={props.socialMedia.instagram}>
                        <i className="fa fa-instagram" /></a></li>}
                    {props.socialMedia.photography && <li><a href={props.socialMedia.photography}
                        title={`${props.name} Photography`}><i className="fa fa-camera" /></a></li>}
                    {props.socialMedia.github && <li><a href={props.socialMedia.github}>
                        <i className='fa fa-github'></i></a></li>}
                </ul>
            </div>
        </div>
        <p className="scrolldown">
            <Link className="smoothscroll" to="about" smooth={true}><i className="icon-down-circle" /></Link>
        </p>
    </header>
);

export default Header;