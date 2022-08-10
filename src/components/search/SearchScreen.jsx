import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from "query-string"
import './_search-screen.scss'
import { useMemo } from "react";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const { q = '' } = queryString.parse(location.search)


    const [{searchText}, handleInputChange] = useForm({
        searchText: q,
    });


    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {

        localStorage.setItem('lastPath',`?q=${ searchText }`)

        e.preventDefault();
        navigate(`?q=${ searchText }`)
    }
    return (
        <div className="search-container">
            
            <div className="search-hero-form">

                <form onSubmit={ handleSearch }>
                    <input
                        type="text"
                        placeholder="Buscar un heroe"
                        name="searchText"
                        onChange={handleInputChange}
                        autoComplete="off"
                        value={searchText}
                    />
                    <button
                    
                    >
                        Buscar...
                    </button>
                </form>
            </div>
            <div className="container-results">
                <h4>Resultados</h4>
                <hr/>
                {
                    ( q === '')
                        ? <div className="search-hero-error scale-up-center ">Buscar un heroe</div>
                        : ( heroesFilter.length === 0 )
                            && <div className="search-hero-error scale-up-center"> No hay resultados de: { q } </div>
                }
               
                    {
                        heroesFilter.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
        </div>
    )
};
