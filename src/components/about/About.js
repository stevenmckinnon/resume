import React from 'react';

class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/steve.jpg" alt="profile"/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>{this.props.personalDetails.biography}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{this.props.personalDetails.name}</span><br />
                                    <span>{this.props.personalDetails.location}</span><br />
                                    <a href={`mailto:${this.props.personalDetails.email}`}> <span>
                                        <i className="fa fa-envelope"></i> Email me!</span></a>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={this.props.personalDetails.cvUrl} rel="noopener noreferrer" target="_blank" className="button"><i
                                        className="fa fa-download"/>Download CV</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;