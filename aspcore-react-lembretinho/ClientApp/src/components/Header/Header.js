import React, { Component } from 'react';

export class Header extends Component {
    static displayName = Header.name;

    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"></a>
                        <a className="bars"></a>
                        <a className="navbar-brand" href="index.html">ADMINBSB - MATERIAL DESIGN</a>
                    </div>
                </div>
            </nav>
        );
    }
}
