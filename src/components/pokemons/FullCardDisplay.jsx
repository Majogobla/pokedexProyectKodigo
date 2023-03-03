import { useEffect, useState } from "react";
import bgImage from "../pokemons/assets/pokemon-bg.jpg";
import './FullCard.css';

export default function FullCardDsiplay({pokemonObj})
{
    const [pokemon, setPokemon] = useState(null);

    useEffect(() =>
    {
        setPokemon(pokemonObj);
    },
    [pokemon, pokemonObj]);

    return (
        <div className="d-flex justify-content-center container-xl">
            <div className="card text-bg-dark card-pokemon fs-1 my-5 border border-warning border-5 card-pokemon w-100" >
                <div className="card-header fw-bold mx-3 d-flex justify-content-between fs-4">
                    <p className="text-uppercase m-0 p-0">{pokemon && pokemon.name}</p>

                    <p className="m-0 p-0">#{pokemon && pokemon.id}</p>
                </div>

                <div className="image-bg d-flex justify-content-center" style={{ backgroundImage: `url(${bgImage})` }}>
                    <img src={pokemon && pokemon.sprites.front_default} className="card-img-top img-fluid imagen-pokemon" alt="pokemon image"/>
                </div>

                <div className="card-body">
                    <div className="d-flex justify-content-between mx-3">
                        <h5 className="card-title fs-6 text-capitalize">Pokemon <span className="fw-light">
                            {pokemon && pokemon.types.map((type, index) =>
                            {
                                if((index + 1) === pokemon.types.length)
                                {
                                    return type.type.name
                                }
                                else
                                {
                                    return type.type.name + ' '
                                }
                            })}
                        </span></h5>

                        <h5 className="card-title">EXP <span>{pokemon && pokemon.base_experience}</span></h5>
                    </div>

                    <div className="card-text fs-6 my-3 text-center">
                        {pokemon && pokemon.stats.map((stat, index) =>
                        {
                            return <p key={index} className="text-capitalize fw-bold">{stat.stat.name} <span className="fw-light">{stat.base_stat}</span></p>
                        })}

                        <p className="text-capitalize fw-bold">Abilities <span className="fw-light">
                            {pokemon && pokemon.abilities.map((ability, index) =>
                            {
                                if((index + 1) === pokemon.abilities.length)
                                {
                                    return ability.ability.name
                                }
                                else
                                {
                                    return ability.ability.name + ' '
                                }
                            })}
                        </span></p>
                    </div>
                </div>

                <div className="card-footer d-flex justify-content-between fs-6 mx-3 border-top border-warning border-1">
                    <p className="fw-bold m-0 p-0">H <span className="fw-light">{pokemon && pokemon.height}</span>ft</p>

                    <p className="fw-bold m-0 p-0">W <span className="fw-light">{pokemon && pokemon.weight}</span>lb</p>
                </div>
            </div>
        </div>
    )
}