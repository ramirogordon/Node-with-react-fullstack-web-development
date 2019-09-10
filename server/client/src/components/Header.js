import React, { Component } from 'react';
import * as actions from '../store/actions';
import { connect } from 'react-redux';

class Header extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        <li>
                            <a href="/auth/google">Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default connect(null, actions)(Header);
