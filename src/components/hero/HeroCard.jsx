import React from 'react';
import { Link } from 'react-router-dom';
import './_app.scss'
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `/assets/${id}.jpg`

    return (
            <div className="card-hero-container card-sass scale-up-ver-center">
                <div className="wrapper-sass">
                    <img src={imagePath} className="hero-card-img" alt={superhero}/>
                    <div className="data-sass">
                        <div className="content-sass">
                            <span className="publisher">{publisher}</span>
                            <h1 className="title">{superhero}</h1>
                            <p className="text">{alter_ego}</p>
                            {
                                ( alter_ego !== characters ) &&
                                <p className="text">{characters}</p>
                            }
                            <p className='text'>{first_appearance}</p>
                            <Link to={`/hero/${id}`} className="button">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};
