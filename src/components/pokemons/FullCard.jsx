import { useEffect, useState } from "react";
import { usePokemonContext } from "../../providers/pageProvider.jsx";
import FullCardDsiplay from "./FullCardDisplay.jsx";

export default function FullCard()
{
    const pokemonName = usePokemonContext();
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    const [pokemon, setPokemon] = useState(null);

    useEffect(() =>
    {
        fetch(url)
            .then(response =>
            {
                if(response.ok)
                {
                    return response.json();
                }
                else
                {
                    throw new Error('Server says bad response');
                }
            })
            .then(result =>
            {
                setPokemon(result);
                // console.log(result);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <FullCardDsiplay pokemonObj={pokemon}/>
    )
}
