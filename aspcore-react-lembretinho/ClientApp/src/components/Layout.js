import React, { Component } from 'react';
import { Header } from './Header/Header';
import { LeftMenu } from './LeftMenu/LeftMenu';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <Header />
                <LeftMenu />
                <section className="content">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </section>
            </div>
        );
    }
}
