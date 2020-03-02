import React, { Component,Suspense } from 'react';
import {Route, Switch} from 'react-router-dom'
import SideNav from 'components/sharedComponents/SideNav'
import Loading from 'components/sharedComponents/Loading'
import routesData from './routes'
import './style.scss'

class ListRoutes extends Component {
    render() {
        return (
            <div className="admin">
                <SideNav/>
                <div className="adminContent">     
                    <Suspense fallback={<Loading/>}>   
                        <Switch>
                            {
                                routesData.map( (route,idx) => (
                                    <Route key={`${route.path}_${idx}`} {...route}/>
                                ))
                            }
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default ListRoutes;