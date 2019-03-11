import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
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
                        <ul className="copyright">
                            <li>© Copyright {new Date().getFullYear()} Steven McKinnon</li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;