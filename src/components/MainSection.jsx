import React from 'react';
import useWindowWidth from '../hooks/useWindowWidth';
import useIsmobile from '../hooks/useIsmobile';
import useIsDesktop from '../hooks/useIsDesktop';
import useIsTablet from '../hooks/useIsTablet';
import useFetch from '../hooks/useFetch';
import { useMutation } from '@tanstack/react-query';

const MainSection = () => {
    const width = useWindowWidth();

    const {data, isLoading, error}= useFetch('https://67eb8197aa794fb3222a7963.mockapi.io/users/users');


    return (
        <div>
            {isLoading ? (
                <p>Loading........</p>
            ) : data ? (
                <ul>
                    {data?.map((user) => (
                        <li key={user.id}>
                            ID: {user.id} <br />
                            Name: {user.name}
                            <button>DELETE</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>error fetching data</p>
            )}

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
