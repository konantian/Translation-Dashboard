import React from 'react';
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component{

    render() {
        return (
            <div>
                <div className="help">Need help?</div>
                <div className="header">Linguo Dashboard</div>
                <a href="/" className="contactButton">Contact us on Shareworks Microsoft Teams</a>
            </div>
        )
    }

}

export default Header;