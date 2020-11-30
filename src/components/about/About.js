import React from 'react';
import GraphImg from "graphcms-image";

const About = props => (
    <section id="about">
        <div className="row">
            <div className="three columns">
                <GraphImg className="profile-pic" image={props.photo} maxWidth={120} />
            </div>
            <div className="nine columns main-col">
                <h2>About Me</h2>
                <p>{props.personalDetails.biography}</p>
                <div className="row">
                    <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>{props.personalDetails.name}</span><br />
                            <span>{props.personalDetails.location}</span><br />
                            <a href={`mailto:${props.personalDetails.email}`}> <span>
                                <i className="fa fa-envelope"></i> Email me!</span></a>
                        </p>
                    </div>
                    <div className="columns download">
                        <p>
                            <a href={props.personalDetails.cvUrl} rel="noopener noreferrer" target="_blank"
                                className="button"><i className="fa fa-download" />Download CV</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About;