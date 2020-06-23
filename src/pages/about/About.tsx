import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Header } from './comps/Brief';
import TitleImage from '../../comps/TitleImage';
import { Experience } from '../../comps/TimelineWork';
import TimelineLife from '../../comps/TimelineLife';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
//Images
import PicAndyBack from './../../assets/about-andy-back.png';
import PicAndyComputer from './../../assets/about-computer.png';
import PicAndyFamily from './../../assets/about-andy-family.png';

const Wrapper = styled.div`
    width: 100%;
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 1rem;
`;

const About = (props: any) => {
    console.log('props', props);
    let history = useHistory();
    const { syncInfo } = props;
    const match = useRouteMatch();
    useEffect(() => {
        syncInfo();
    }, [syncInfo]);

    // const submenuItems = [
    //     { id: 'intro', url: `${match.url}/intro`, title: 'Introduction', active: true },
    //     { id: 'work', url: `${match.url}/work`, title: 'Work Experience' },
    //     { id: 'life', url: `${match.url}/life`, title: 'Life Experience' },
    //     { id: 'skill', url: `${match.url}/skill`, title: 'Skills' }
    // ];
    const imageURL = process.env.PUBLIC_URL + 'static/images/about_img_bar.jpg';

    const aboutHtml = (
        <>
            <div id='header'>
                <Header name='Andy Cao' position='Software Developer'></Header>
            </div>
            <div>
                <h3>test1</h3>
                <p>{props.summary}</p>
                <h3>test2</h3>
                <p>{props.summary}</p>
            </div>
        </>
    );

    const getAge = (birthYear: number) => {
        var d = new Date();
        var n = d.getFullYear();
        return n - birthYear;
    };
    // const getMyDays = () => {
    //     return getAge(1982) * 365;
    // };
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <TitleImage title='' subtitle='' backgroundImageURL={imageURL} />
            <div style={{ textAlign: `center`, marginTop: `3rem` }}></div>
            {props.loadedState === 'loaded' ? (
                <Wrapper>
                    <Switch>
                        <Route path={`${match.path}/work`}>
                            <Experience data={props.timelines.works} />
                        </Route>
                        <Route path={`${match.path}/life`}>
                            <button
                                onClick={() => {
                                    history.goBack();
                                }}>
                                close
                            </button>
                            <TimelineLife data={props.timelines.life} />
                        </Route>
                        <Route path={`${match.path}/skill`}>
                            <h1>Skills</h1>
                        </Route>
                        <Route path={`${match.path}/intro`}>{aboutHtml}</Route>
                        <Route>
                            <div style={{ textAlign: `center` }}>
                                <h3>Who's Andy</h3>
                                <p style={{ textAlign: `justify` }}>
                                    My name is Andy Cao and I come from China{' '}
                                    <span role='img' aria-label='china'>
                                        🇨🇳
                                    </span>
                                    . I am a software developer
                                    <span role='img' aria-label='developer'>
                                        👨‍💻
                                    </span>{' '}
                                    who focuses on building website and mobile apps{' '}
                                    <span role='img' aria-label='iphone'>
                                        📱
                                    </span>
                                    . I have serval hobbies with me for many years. Like RC hobby, FPV(flying drone in
                                    first person view), video editing and DIY. Currently My family and I living in
                                    Auckland, New Zealand{' '}
                                    <span role='img' aria-label='nz'>
                                        🇳🇿
                                    </span>
                                    .
                                </p>
                                <img style={{ width: `100%` }} src={PicAndyBack} alt='I was on the beach' />
                                <div style={{ margin: `2rem auto` }}>
                                    {/* <SingleButton>My Hobbies</SingleButton>
                                        <div
                                            style={{
                                                display: `inline-block`,
                                                width: `1rem`,
                                                height: `1rem`
                                            }}
                                        />
                                        <SingleButton>Timeline</SingleButton> */}
                                </div>

                                <h3>What I do?</h3>
                                <p style={{ textAlign: `justify` }}>
                                    I am a software developer{' '}
                                    <span role='img' aria-label='developer'>
                                        👨‍💻
                                    </span>{' '}
                                    and have worked in the software industry for more than 15 years. I have developed
                                    websites, made mobile 📱apps, and also built and designed casual games{' '}
                                    <span role='img' aria-label='game dev'>
                                        🕹
                                    </span>
                                    . The process of developing software always brings me happiness and satisfaction.
                                    Currently, I am learning{' '}
                                    <span role='img' aria-label='learning'>
                                        📖
                                    </span>{' '}
                                    and using front-end development technology. The main focuses are on JavaScript, CSS,
                                    HTML, React related technology stack and React Native. Because I love Apple{' '}
                                    <span role='img' aria-label='macbook pro'>
                                        💻
                                    </span>{' '}
                                    ecosystem, I also keep an eye on iOS development.
                                </p>
                                <img style={{ width: `100%` }} src={PicAndyComputer} alt='My Computer' />
                                <div style={{ margin: `2rem auto` }}>
                                    {/* <InlineLink to={match.path + '/life'}>
                                            <SingleButton>LIFE EVENTS</SingleButton>
                                        </InlineLink> */}
                                </div>
                                <h3>Family</h3>
                                <p style={{ textAlign: `justify` }}>
                                    I was very lucky to have met my wife Fang very early. She helped me immensely in
                                    life and spirit. We have a {getAge(2016)} year old daughter who is very lively,
                                    healthy and cute. Our family currently lives in Auckland.
                                </p>
                                <img style={{ width: `100%` }} src={PicAndyFamily} alt='Introduce my family' />
                                <div style={{ margin: `2rem auto` }}></div>
                            </div>
                        </Route>
                    </Switch>
                </Wrapper>
            ) : (
                <p>loading</p>
            )}
        </>
    );
};

export default About;
