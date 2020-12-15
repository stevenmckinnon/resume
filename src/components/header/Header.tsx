import * as React from 'react';
import { Link, Element } from "react-scroll";
import { SocialMedia } from '../../interfaces';

interface Props {
    name: string;
    intro: string;
    socialMedia: SocialMedia;
}

const Header: React.FC<Props> = ({ name, intro, socialMedia }) => (
    <Element name="home">
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#hide-nav" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li><Link className="smoothscroll" spy={true} activeClass="current" to="home" smooth={true}>Home</Link></li>
                    <li><Link className="smoothscroll" spy={true} activeClass="current" to="about" smooth={true}>About</Link></li>
                    <li><Link className="smoothscroll" spy={true} activeClass="current" to="resume" smooth={true}>Resume</Link></li>
                </ul>
            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm {name}.</h1>
                    <h3>{intro} Let's <Link className="smoothscroll" to="about" smooth={true}>start scrolling </Link>
                            and learn more <Link className="smoothscroll" to="about" smooth={true}>about me</Link>.</h3>
                    <hr />
                    <ul className="social">
                        {socialMedia.twitter && <li><a href={socialMedia.twitter}>
                            <i className="fa fa-twitter" /></a></li>}
                        {socialMedia.linkedIn && <li><a href={socialMedia.linkedIn}>
                            <i className="fa fa-linkedin" /></a></li>}
                        {socialMedia.instagram && <li><a href={socialMedia.instagram}>
                            <i className="fa fa-instagram" /></a></li>}
                        {socialMedia.photography && <li><a href={socialMedia.photography}
                            title={`${name} Photography`}><i className="fa fa-camera" /></a></li>}
                        {socialMedia.github && <li><a href={socialMedia.github}>
                            <i className='fa fa-github'></i></a></li>}
                    </ul>
                </div>
            </div>
            <p className="scrolldown">
                <Link className="smoothscroll" to="about" smooth={true}><i className="icon-down-circle" /></Link>
            </p>
        </header>
    </Element>
);

export default Header;