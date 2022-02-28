import React from 'react';
import Header from './components/Header';
import Details from './components/Details';
import Overview from './components/Overview';
import { Tabs, Tab } from 'react-bootstrap';

class Main extends React.Component {

    state = {
        isOverview: true
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Overview"><Overview /> </Tab>
                    <Tab eventKey="profile" title="Details"><Details /></Tab>
                </Tabs>
            </div>
        )
    }
}

export default Main;