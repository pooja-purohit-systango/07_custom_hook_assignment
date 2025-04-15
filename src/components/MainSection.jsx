import React from 'react';
import useWindowWidth from '../hooks/useWindowWidth';
import useIsmobile from '../hooks/useIsmobile';
import useIsDesktop from '../hooks/useIsDesktop';
import useIsTablet from '../hooks/useIsTablet';
import useFetch from '../hooks/useFetch';
import { useMutation } from '@tanstack/react-query';

const MainSection = () => {
    const width = useWindowWidth();

    return (
        <div>

            {useIsmobile(width) ? (
                <p>Working on mobile</p>
            ) : useIsDesktop(width) ? (
                <p>Working on desktop</p>
            ) : useIsTablet(width) ? (
                <p>Working on tablet</p>
            ) : (
                <p>Working on some other device</p>
            )}

            <p>The width of the screen is: {width}px</p>
        </div>
    );
};

export default MainSection;
