import React from 'react';
import { Link } from "react-scroll";

const Footer = (props) => (
    <footer>
        <div className="row">
            <div className="twelve columns">
                <ul className="social-links">
                    {props.socialMedia.twitter ? <li><a href={props.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter" /></a></li> : null}
                    {props.socialMedia.linkedIn ? <li><a href={props.socialMedia.linkedIn} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin" /></a></li> : null}
                    {props.socialMedia.instagram ? <li><a href={props.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram" /></a></li> : null}
                    {props.socialMedia.photography ? <li><a href={props.socialMedia.photography} target="_blank" rel="noopener noreferrer"
                        title={`${props.name} Photography`}><i className="fa fa-camera" /></a></li> : null}
                    {props.socialMedia.github ? <li><a href={props.socialMedia.github} target="_blank" rel="noopener noreferrer">
                        <i className='fa fa-github'></i></a></li> : null}
                    {props.socialMedia.buyMeACoffee ? <li><a href={props.socialMedia.buyMeACoffee} target="_blank" rel="noopener noreferrer">
                        <i className='fa fa-coffee'></i></a></li> : null}
                </ul>
                <ul className="copyright">
                    <li>© Copyright {new Date().getFullYear()} Steven McKinnon</li>
                </ul>
            </div>
            <div id="go-top"><Link className="smoothscroll" title="Back to Top" to="home" smooth={true}><i className="icon-up-open" /></Link></div>
        </div>
    </footer>
);

export default Footer;