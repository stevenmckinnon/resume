import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="http://twitter.com/stevenmckinnon"><i className="fa fa-twitter"/></a></li>
                            <li><a href="https://www.linkedin.com/in/stevenmckinnon92/"><i className="fa fa-linkedin"/></a></li>
                            <li><a href="http://instagram.com/stevenmckinnon"><i className="fa fa-instagram"/></a></li>
                            <li><a href="http://stevenmckinnon.co.uk"><i className="fa fa-camera"/></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>© Copyright 2019 Steven McKinnon</li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;