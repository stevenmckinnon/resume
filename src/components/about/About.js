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
                        <p>I have 5 years experience in the financial sector building web based applications using
                            various
                            frameworks in a number of roles. With previous experience in full stack, product owner and
                            QA roles, I am currently a front end developer using the React framework, building internal
                            applications used by other technology teams within the firm.
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Steve McKinnon</span><br />
                                    <span>Glasgow, Scotland<br /></span>
                                    <a href="mailto:hello@stevenmckinnon.co.uk"> <span>
                                        <i className="fa fa-envelope"></i> Email me!</span></a>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="./documents/StevenMcKinnonCV.pdf" download className="button"><i
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