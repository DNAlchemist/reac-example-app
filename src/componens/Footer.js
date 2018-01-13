import React, {Component} from "react";

class FooterCopyright extends Component {
    render() {
        return (
            <div className="footer-copyright">
                <p>© 2018 Copyright Text </p>
            </div>
        );
    }
}

function Logo() {
    return(
        <div className="col-sm-3">
            <h2 className="logo"><a href="#"> SITE </a></h2>
        </div>
    );
}

function GetStarted() {
    return(
        <div className="col-sm-2">
            <h5>Get started</h5>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sign up</a></li>
                <li><a href="#">Downloads</a></li>
            </ul>
        </div>
    );
}

function AboutUs() {
    return(
        <div className="col-sm-2">
            <h5>About us</h5>
            <ul>
                <li><a href="#">Company Information</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Reviews</a></li>
            </ul>
        </div>
    );
}

function Support() {
    return(
        <div className="col-sm-2">
            <h5>Support</h5>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Help desk</a></li>
                <li><a href="#">Forums</a></li>
            </ul>
        </div>
    );
}

function ButtonContactUs() {
    return (<button type="button" className="btn btn-default">Contact us</button>);
}

function ContactUs() {
    return(
        <div className="col-sm-3">
            <div className="social-networks">
                <a href="#" className="twitter"><i className="fa fa-twitter"/></a>
                <a href="#" className="facebook"><i className="fa fa-facebook"/></a>
                <a href="#" className="google"><i className="fa fa-google-plus"/></a>
            </div>
            <ButtonContactUs/>
        </div>
    );
}

export default class Footer extends Component {
    render() {
        return (
            <footer id="myFooter">
                <div className="container">
                    <div className="row">
                        <Logo/>
                        <GetStarted/>
                        <AboutUs/>
                        <Support/>
                        <ContactUs/>
                    </div>
                </div>
                <FooterCopyright/>
            </footer>
        );
    }
}
