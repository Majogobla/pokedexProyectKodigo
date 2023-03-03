import { useEffect, useState } from "react";
import { usePageToggleContext, usePokemonToggleContext } from "../../providers/pageProvider.jsx";

export default function Card({pokemonObj})
{
    const pageToggle = usePageToggleContext();
    const pokemonToggle = usePokemonToggleContext();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() =>
    {
        setPokemon(pokemonObj);
    },
    [pokemon, pokemonObj]);

    return (
        <div className="card text-bg-dark mb-3 col-6 col-md-4 col-xl-3 text-center m-3 border border-warning border-5">
            <div className="card-header img-fluid fw-bold border-0">{pokemon && pokemon.id}</div>

            <img src={pokemon && pokemon.sprites.front_default} className="card-img-top" alt="pokemon image"/>

            <div className="card-body">
                <h5 className="card-title text-capitalize fw-bold fs-4">{pokemon && pokemon.name}</h5>

                <div className="d-grid">
                    <button className="btn btn-primary" type="button" onClick={() => {pokemonToggle(pokemon.name); pageToggle('pokemon')}}>Ir a la Carta</button>
                </div>
            </div>
        </div>
    )
}