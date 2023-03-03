import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard.jsx";

export default function ListTypes()
{

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0';
    const [pokemons, setPokemons] = useState(null);
    const [type, setType] = useState('');

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
                    throw new Error('Server says dad response');
                }
            })
            .then(results =>
            {
                setPokemons(results.results);
            })
            .catch(error => console.log(error));
    }, []);

    function handleTypeChange(e)
    {
        setType(e.target.value);
    }

    return (
        <div className="container text-center cover-screen">
            <div className="d-flex row justify-content-center my-3">
                <div className="d-flex justify-content-center">
                    <select
                        className='form-select text-center fs-3 text-uppercase fw-bold my-5'
                        value={type}
                        onChange={handleTypeChange}
                    >
                        <option value="" disabled>-- Selecciona una Opcion --</option>
                        <option value="grass">grass</option>
                        <option value="poison">poison</option>
                        <option value="fire">fire</option>
                        <option value="flying">flying</option>
                        <option value="water">water</option>
                        <option value="bug">bug</option>
                        <option value="normal">normal</option>
                        <option value="electric">electric</option>
                        <option value="ground">ground</option>
                        <option value="fairy">fairy</option>
                        <option value="fighting">fighting</option>
                        <option value="psychic">psychic</option>
                        <option value="rock">rock</option>
                        <option value="steel">steel</option>
                        <option value="ice">ice</option>
                        <option value="ghost">ghost</option>
                        <option value="dragon">dragon</option>
                    </select>
                </div>

                {pokemons && pokemons.map((pokemon, index) =>
                {
                    return(
                        <DisplayCard key={index} pokemonURL={pokemon.url} typePokemon={type}/>
                    )
                })}
            </div>
        </div>
    )
};