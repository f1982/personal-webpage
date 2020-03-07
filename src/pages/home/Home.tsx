import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleButton from '../../comps/SingleButton';
import HighlightProject from './comps/HighlightProject';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Links } from '../../comps/Links';
import ShowcaseBox from './comps/ShowcaseBox';
import ContactForm from '../../comps/ContactForm';
import DoAndLike from '../../pages/home/comps/DoAndLike';
import '../../assets/styles/home-css-animate.css';

const Wrapper = styled.div`
    /* text-align: center; */
`;
const HorizentalExtendBG = styled.div`
    width: 100%;
    background-color: #eee;
`;
const SectionRow = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-flow: row;
    margin: 1.5rem auto;
    padding: 1.5rem 0;
    @media screen and (max-width: 768px) {
        flex-flow: column;
        padding: 0.5rem 0.5rem;
    }
`;
const Row = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
`;

const IntroLeft = styled.div`
    display: flex;
    flex-flow: column;
    width: 300px;
    margin-right: 1.5rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-right: 0;
    }
`;

const IntroRight = styled.div`
    margin-left: 1rem;
    flex: 1;
    flex-shrink: 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right;
    text-align: center;
    @media screen and (max-width: 750px) {
        margin-left: 0rem;
        width: 100%;
        height: 300px;
    }
`;

const Home = (props: any) => {
    const { syncHome } = props;
    const hiImageURL = process.env.PUBLIC_URL + 'static/images/hi.png';
    const bgImageURL = process.env.PUBLIC_URL + 'static/images/intro_pic_bg.png';

    useEffect(() => {
        syncHome();
    }, [syncHome]);

    return (
        <Wrapper>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HorizentalExtendBG>
                <SectionRow>
                    <IntroLeft>
                        <div>
                            <h4>Hi there,</h4>
                        </div>
                        <div>
                            <img style={{ width: `300px` }} src={hiImageURL} alt='Hi I am Andy' />
                        </div>
                        <h5>Software Developer</h5>

                        <Link to='/about/intro'>
                            <SingleButton>Say Hi!</SingleButton>
                        </Link>
                    </IntroLeft>
                    <IntroRight
                        style={{
                            backgroundImage: `url(${bgImageURL})`
                        }}>
                        <ShowcaseBox></ShowcaseBox>
                    </IntroRight>
                </SectionRow>
            </HorizentalExtendBG>

            <Row>
                <DoAndLike whatIDo={props.whatIDo} whatILike={props.whatILike} />
            </Row>
            <HighlightProject
                projects={props.projects}
                moreProjectCallback={() => {
                    console.log('more project callback');
                }}
            />
            <Links data={props.sns} category='all'></Links>
            <Row>
                <ContactForm />
            </Row>
        </Wrapper>
    );
};

export default Home;
