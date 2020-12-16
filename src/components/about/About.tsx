import * as React from 'react';
import GraphImg from "graphcms-image";
import { Element } from 'react-scroll';
import { PersonalDetails, Photo } from '../../interfaces';

interface Props {
    photo: Photo;
    personalDetails: PersonalDetails;
}

const About: React.FC<Props> = ({ photo, personalDetails }) => (
    <Element name="about">
        <section id="about">
            <div className="row about">
                <div className="three columns">
                    <GraphImg className="profile-pic" image={photo} maxWidth={120} />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{personalDetails.biography}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="contact">
                                <span><b>{personalDetails.name}</b></span><br />
                                <span>{personalDetails.location}</span><br />
                                <a href={`mailto:${personalDetails.email}`}> <span>
                                    <i className="fa fa-envelope"></i> Email me!</span></a>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={personalDetails.cvUrl} rel="noopener noreferrer" target="_blank"
                                    className="button"><i className="fa fa-download" />Download CV</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Element>
);

export default About;