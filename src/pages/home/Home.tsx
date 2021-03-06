import React, { useEffect } from 'react';
import styled from 'styled-components';
import HighlightProject from './comps/HighlightProject';
import { Helmet } from 'react-helmet';
import { Links } from '../../comps/link';
import FocusingBox from './comps/ShowcaseBox';
import DoAndLike from '../../pages/home/comps/DoAndLike';
import { SectionNarrow } from '../../layouts/default';
import HeyThere from './comps/HeyThere';

const RectangleAngle = -30 - Math.random() * 20 + 'deg';
const BannerBackground = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    :before {
        content: '';
        position: absolute;
        z-index: -10;
        background-color: #efc800;
        top: 30%;
        left: -30%;
        width: 150%;
        height: 60%;
        transform: rotate(${RectangleAngle});
    }
`;

const BannerWrapper = styled.div`
    width: 100%;
    max-width: 970px;
    display: flex;
    margin: 0 auto;
    flex-flow: row;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;
    padding: 3rem 0;
    @media screen and (max-width: 768px) {
        flex-flow: column-reverse;
        padding: 1rem 0.5rem 1rem 0.5rem;
    }
`;

const FocusingFrame = styled.div`
    width: 764px;
    height: 430px;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right;
    text-align: center;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 282px;
        padding: 0.5rem 0;
    }
`;

const Home = (props: any) => {
    // const [ready, setReady] = useState(false);

    const { syncHome } = props;

    useEffect(() => {
        syncHome();
        // setReady(true);
    }, [syncHome]);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <BannerBackground>
                <BannerWrapper>
                    <HeyThere />
                    <FocusingFrame>
                        <FocusingBox />
                    </FocusingFrame>
                </BannerWrapper>
            </BannerBackground>
            <SectionNarrow>
                <DoAndLike whatIDo={props.whatIDo} whatILike={props.whatILike} />
            </SectionNarrow>
            <SectionNarrow>
                <HighlightProject projects={props.projects} moreProjectCallback={() => {}} />
            </SectionNarrow>

            <Links linkData={props.links.sns} iconColor='#EFC854' category='all' />
        </>
    );
};

export default Home;
