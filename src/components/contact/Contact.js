import React from 'react';
import * as emailjs from 'emailjs-com';

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contactName: '',
            contactEmail: '',
            contactSubject: '',
            contactMessage: '',
            messageSent: false
        }
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitForm = () => {
        let template_params = {
            "from_name": this.state.contactName,
            "from_email": this.state.contactEmail,
            "reply_to": "",
            "subject": this.state.contactSubject,
            "message_html": this.state.contactMessage
        }

        let service_id = "gmail";
        let template_id = "template_ITzHz8q8";
        let user_id = "user_lk6bjYxGAKmDqUrD2xoll";
        emailjs.send(service_id, template_id, template_params, user_id).then((response) => {
            console.log(response.status + response.text);
        }, (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">Please feel free to get in touch for anything!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="twelve columns">
                        {this.state.messageSent ?
                            <div id="message-success">
                                <i className="fa fa-check" />Your message was sent, thank you!<br />
                            </div> :
                            <form method="post" id="contactForm" name="contactForm">
                                <fieldset>
                                    <div>
                                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                                        <input type="text" size={35} id="contactName" name="contactName"
                                            value={this.state.contactName}
                                            onChange={(e) => this.updateFormField(e)} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                        <input type="text" size={35} id="contactEmail" name="contactEmail"
                                            value={this.state.contactEmail}
                                            onChange={(e) => this.updateFormField(e)} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactSubject">Subject</label>
                                        <input type="text" size={35} id="contactSubject"
                                            name="contactSubject" value={this.state.contactSubject}
                                            onChange={(e) => this.updateFormField(e)} />
                                    </div>
                                    <div>
                                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                        <textarea cols={50} rows={15} id="contactMessage" name="contactMessage"
                                            value={this.state.contactMessage}
                                            onChange={(e) => this.updateFormField(e)} />
                                    </div>
                                    <div>
                                        <button className="submit" onSubmit={() => this.submitForm()}>Submit</button>
                                        <span id="image-loader"><img alt="loading" src="images/loader.gif" /></span>
                                    </div>
                                </fieldset>
                            </form>
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact