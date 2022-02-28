import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class JiraStatusObject extends Component {

    state = {
        key: 0,
        user: "Participant",
        status: "Completed"
    }


    render() {
        return (
            <React.Fragment>
                <li class="list-unstyled" key={this.state.key}>
                    <div>{this.state.status}</div>
                </li>
            </React.Fragment>
        );
    };
}

export default JiraStatusObject;