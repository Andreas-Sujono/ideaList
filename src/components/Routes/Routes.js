import React, { Component,Suspense } from 'react';
import {HashRouter as Router, Route, Switch,withRouter} from 'react-router-dom'
import Loading from 'components/sharedComponents/Loading'
import routesData from './data'


class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  }
  
ScrollToTop = withRouter(ScrollToTop)

class Routes extends Component {
    render() {
        return (
            <div className="routes">
                <Router>
                    <ScrollToTop>
                    <Suspense fallback={<Loading/>}>
                        <Switch>
                            {
                                routesData.map( (item,idx) => (
                                    <Route key={`${item.path}_${idx}`} {...item}/>
                                ))
                            }
                        </Switch>
                    </Suspense>
                    </ScrollToTop>
                </Router>
            </div>
        );
    }
}

export default Routes;