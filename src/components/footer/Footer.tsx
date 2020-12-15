import * as React from 'react';
import { Link } from "react-scroll";
import { SocialMedia } from '../../interfaces';

interface Props {
    name: string;
    socialMedia: SocialMedia;
}

const Footer: React.FC<Props> = ({ name, socialMedia }) => (
    <footer>
        <div className="row">
            <div className="twelve columns">
                <ul className="social-links">
                    {socialMedia.twitter && <li><a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter" /></a></li>}
                    {socialMedia.linkedIn && <li><a href={socialMedia.linkedIn} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin" /></a></li>}
                    {socialMedia.instagram && <li><a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram" /></a></li>}
                    {socialMedia.photography && <li><a href={socialMedia.photography} target="_blank" rel="noopener noreferrer"
                        title={`${name} Photography`}><i className="fa fa-camera" /></a></li>}
                    {socialMedia.github && <li><a href={socialMedia.github} target="_blank" rel="noopener noreferrer">
                        <i className='fa fa-github'></i></a></li>}
                    {socialMedia.buyMeACoffee && <li><a href={socialMedia.buyMeACoffee} target="_blank" rel="noopener noreferrer">
                        <i className='fa fa-coffee'></i></a></li>}
                </ul>
                <ul className="copyright">
                    <li>© Copyright {new Date().getFullYear()} {name}</li>
                </ul>
            </div>
            <div id="go-top"><Link className="smoothscroll" title="Back to Top" to="home" smooth={true}><i className="icon-up-open" /></Link></div>
        </div>
    </footer>
);

export default Footer;