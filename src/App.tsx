import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import routes from './pages';
import Layout from './layouts/default';
import Welcome from './pages/welcome';

import { SettingContext } from './Settings';
import * as log from 'loglevel';

log.disableAll();
const App = (props: any) => {
    const { syncAppConfig, settings } = props;

    useEffect(() => {
        log.info('hello, i am loglevel');
        ReactGA.initialize('UA-171033058-1');

        syncAppConfig();
    }, [syncAppConfig]);

    useEffect(() => {}, [settings]);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Helmet titleTemplate='%s - Andy Cao Personal Website'>
                <meta name='description' content='An opensource personal website by React' />
            </Helmet>
            <SettingContext.Provider value={{ contentWidth: 950, smallDeviceWidth: 768 }}>
                <Switch>
                    <Route exact path='/'>
                        <Welcome />
                    </Route>
                    <Route>
                        <Layout>
                            {routes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                />
                            ))}
                        </Layout>
                    </Route>
                </Switch>
            </SettingContext.Provider>
        </Router>
    );
};

const mapStatesToProps = (rootState: any) => ({
    settings: rootState.appConfig.settings
});

const mapDispatchToProps = (dispatch: any) => ({
    syncAppConfig: dispatch.appConfig.syncConfig
});

export default connect(mapStatesToProps, mapDispatchToProps)(App);
