import React, { Component } from 'react';
// import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import './map.css';
import GoogleMap from '../../components/map/map';

class Map extends Component {
    render () {
        return (
            <div className="Map">
                {/* <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
               
                        </ul>
                    </nav>
                </header> */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Route path="/" exact component={GoogleMap} />

                <Route path="/:id" exact component={GoogleMap} />
            </div>
        );
    }
}

export default Map;