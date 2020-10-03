import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class LeftMenu extends Component {
    static displayName = LeftMenu.name;

    componentDidMount() {
        alert('MOUNTED')
    }

    render() {
        return (
            <section>
                <aside id="leftsidebar" className="sidebar">
                    <div className="user-info">
                        <div className="image">
                            <img src="images/user.png" width="48" height="48" alt="User" />
                        </div>
                        <div className="info-container">
                            <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                            <div className="email">john.doe@example.com</div>
                            <div className="btn-group user-helper-dropdown">
                                <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                                <ul className="dropdown-menu pull-right">
                                    <li><a href="/"><i className="material-icons">person</i>Profile</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="/"><i className="material-icons">group</i>Followers</a></li>
                                    <li><a href="/"><i className="material-icons">shopping_cart</i>Sales</a></li>
                                    <li><a href="/"><i className="material-icons">favorite</i>Likes</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="/"><i className="material-icons">input</i>Sign Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="menu">
                        <ul className="list">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active">
                                <Link to={'/'} exact>
                                    <i className="material-icons">home</i>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/counter'} exact>
                                    <i className="material-icons">text_fields</i>
                                    <span>Counter</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/fetch-data'} exact>
                                    <i className="material-icons">layers</i>
                                    <span>Fetch Data</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </section>
        );
    }
}
