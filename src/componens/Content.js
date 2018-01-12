import React, {Component} from "react";

var text = "This is Body";

/*
function setText() {
    text = (Math.random() >= 0.5).toString();
}
*/

// setInterval(setText, 1000);

function SignUp() {
    return(
        <div className="jumbotron">
            <h1 className="display-3">{text}</h1>
            <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
        </div>);
}

function Subheading(props) {
    return (
            <div className="col-lg-6">
                <h4>{props.title}</h4>
                <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                <h4>Subheading</h4>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                <h4>Subheading</h4>
                <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>
    );
}


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.updateDate(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateDate() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="row marketing">
                <div className="row marketing"/>
                <h4 className="text-center">{this.state.date.toLocaleTimeString()} {this.state.date.toLocaleDateString()}</h4>
            </div>
        )
    }
}

export default class Content extends Component {

    render() {
        return (
            <main role="main" className="container">
                <SignUp/>
                <Subheading title="Left"/>
                <Subheading title="Right"/>
                <Clock />
            </main>
        );
    }
}