import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm Steve McKinnon.</h1>
                        <h3>I'm a Glasgow based <span>front end developer</span> and <span>web designer </span>
                            creating modern web apps in the financial sector. Let's <a
                                className="smoothscroll" href="#about">start scrolling </a>
                            and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                        <hr />
                        <ul className="social">
                            <li><a href="http://twitter.com/stevenmckinnon"><i className="fa fa-twitter"/></a></li>
                            <li><a href="https://www.linkedin.com/in/stevenmckinnon92/"><i className="fa fa-linkedin"/></a>
                            </li>
                            <li><a href="http://instagram.com/stevenmckinnon"><i className="fa fa-instagram"/></a></li>
                            <li><a href="http://stevenmckinnon.co.uk"><i className="fa fa-camera"/></a></li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"/></a>
                </p>
            </header>
        );
    }
}

export default Header;