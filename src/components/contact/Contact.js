import React from 'react';

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            body: ''
        }
    }

    updateFormField = (field, value) => {
        this.setState({
            [field]: value
        });
    }

    submitForm = () => {

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
                        <form action method="post" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" size={35} id="contactName" name="contactName"
                                           value={this.state.name}
                                           onChange={(e) => this.updateFormField('name', e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" size={35} id="contactEmail" name="contactEmail"
                                           value={this.state.email}
                                           onChange={(e) => this.updateFormField('email', e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" size={35} id="contactSubject"
                                           name="contactSubject" value={this.state.subject}
                                           onChange={(e) => this.updateFormField('subject', e.target.value)}/>
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage"
                                              defaultValue={""} value={this.state.body}
                                              onChange={(e) => this.updateFormField('body', e.target.value)}/>
                                </div>
                                <div>
                                    <button className="submit" onSubmit={() => this.submitForm()}>Submit</button>
                                    <span id="image-loader"><img alt="loading" src="images/loader.gif"/></span>
                                </div>
                            </fieldset>
                        </form>

                        <div id="message-warning"> Error boy</div>

                        <div id="message-success">
                            <i className="fa fa-check"/>Your message was sent, thank you!<br />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact