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
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {this.props.name}.</h1>
                        <h3>{this.props.intro} Let's <a
                            className="smoothscroll" href="#about">start scrolling </a>
                            and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                        <hr />
                        <ul className="social">
                            {this.props.socialMedia.twitter ? <li><a href={this.props.socialMedia.twitter}>
                                <i className="fa fa-twitter" /></a></li> : null}
                            {this.props.socialMedia.linkedIn ? <li><a href={this.props.socialMedia.linkedIn}>
                                <i className="fa fa-linkedin" /></a></li> : null}
                            {this.props.socialMedia.instagram ? <li><a href={this.props.socialMedia.instagram}>
                                <i className="fa fa-instagram" /></a></li> : null}
                            {this.props.socialMedia.photography ? <li><a href={this.props.socialMedia.photography} 
                                title={`${this.props.name} Photography`}><i className="fa fa-camera" /></a></li> : null}
                            {this.props.socialMedia.github ? <li><a href={this.props.socialMedia.github}>
                                <i className='fa fa-github'></i></a></li> : null}
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header>
        );
    }
}

export default Header;