import React from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';
import ListRoutes from './ListRoutes'

function Admin(){
    return (
        <Switch>
            <Route path="/admin" component={ListRoutes}/>
        </Switch>
    );
}


export default withRouter(Admin);