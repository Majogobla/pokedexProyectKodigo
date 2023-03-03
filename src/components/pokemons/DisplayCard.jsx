import { useEffect, useState } from "react"
import Card from "./Card";

export default function DisplayCard({pokemonURL, typePokemon})
{
    const [pokemon, setPokemon] = useState(null);
    
    useEffect(() =>
    {
        fetch(pokemonURL)
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
            .then(results =>
            {
                // console.log(results);
                setPokemon(results);
            })
            .catch(error => console.log(error));
    }, 
    [pokemonURL])

    if(typePokemon === "all")
    {
        return (
            <Card pokemonObj={pokemon}/>
        )
    }
    else
    {
        if(pokemon)
        {
            if(pokemon.types.some(type => type.type.name === typePokemon))
            {
                return(
                    <Card pokemonObj={pokemon}/>
                )
            }

            return;
        }

        return;
    }
}
