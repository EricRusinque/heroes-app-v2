import React from 'react';
import { HeroList } from '../hero/HeroList';

export const DcScreen = () => {
    return (
        <>
            <h1 style={{
                textAlign:"center"
            }}>Dc Characters</h1>
            <hr/>
            <HeroList publisher={'DC Comics'}/>
        </>
    )
};
