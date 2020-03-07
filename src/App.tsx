import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './pages';
import Layout from './layouts/default';
import Welcome from './pages/welcome';

import GSection from './examples/section';

const App = (props: any) => {
    const { syncAppConfig, settings } = props;

    useEffect(() => {
        syncAppConfig();
    }, [syncAppConfig]);

    useEffect(() => {}, [settings]);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Helmet titleTemplate='%s - Andy Cao personal website'>
                <meta name='description' content='An opensource personal website by React' />
            </Helmet>
            {/* test */}
            {/* <GSection></GSection> */}
            {/* test */}
            <Switch>
                <Route exact path='/'>
                    <Welcome></Welcome>
                    {/* <div>test</div> */}
                </Route>
                <Route>
                    <Layout>
                        {routes.map(route => (
                            <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                        ))}
                    </Layout>
                </Route>
            </Switch>
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
