import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Me, Settings, Trips } from '../components';

export default class Root extends React.Component {

    public render() {

        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/me" component={Me} />
                <Route path="/trips" component={Trips} />
                <Route path="/settings" component={Settings} />
            </Switch>
        );

    }

}
