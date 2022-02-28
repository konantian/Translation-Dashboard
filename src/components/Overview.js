import React from 'react';
import "./Overview.css";
import { Clock } from 'react-bootstrap-icons';

class Overview extends React.Component {

    state = {
        dateOfUpdate: "February 25, 2022"
    }
    render () {
        return (
            <div>
                <div className="update">
                    <div className="overview">Overview</div>
                    <div className="updatedInfo">
                        <Clock/> Last updated {this.state.dateOfUpdate}
                    </div>
                </div>
                <div className="display">
                    <div className="pieChart">
                    </div>
                    <div className="legend">

                    </div>
                </div>
            </div>
        )
    }
}

export default Overview;