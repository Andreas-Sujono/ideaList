import React, { Component,Suspense } from 'react';
import {HashRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import routesData from './data'

class Routes extends Component {
    render() {
        return (
            <div className="routes">
                <Router>
                    <Suspense fallback={ <div>Loading...</div> }>
                        <Switch>
                            {
                                routesData.map( (item,idx) => (
                                    <Route key={`${item.path}_${idx}`} {...item}/>
                                ))
                            }
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default Routes;