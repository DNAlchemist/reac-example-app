import React, { Component } from 'react';

function NavBarHeader() {
    return (
        <div className="navbar-header">
            <a className="navbar-brand" href="/">My homepage</a>
        </div>
    );
}

function NavBarNavigation() {
    return (
        <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href={"#page1"}>Page 1</a></li>
            <li><a href={"#page2"}>Page 2</a></li>
            <li><a href={"#page3"}>Page 3</a></li>
        </ul>
    );
}

function NavBarRight(props) {
    return (
        <ul className="nav navbar-nav navbar-right">
            <li><a href={"#signup"}><span className="glyphicon glyphicon-user"/> Sign Up</a></li>
            <li><a href={"#login"}><span className="glyphicon glyphicon-log-in"/> Login</a></li>
        </ul>
    );
}

export default class HeaderMenu extends Component {
    render() {
        let rightMenu;
        if (!this.props.authStatus) {
            rightMenu = (
                <NavBarRight/>
            );
        }

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <NavBarHeader/>
                    <NavBarNavigation/>
                    {rightMenu}
                </div>
            </nav>
        );
    }
}

