import React from 'react';
import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {
    return (
        <>
            <h1 style={{
                textAlign:"center"
            }}>Marvel Characters</h1>
            <hr/>
            <div>
                <HeroList publisher={'Marvel Comics'}/>
            </div>

        </>
    )
};
