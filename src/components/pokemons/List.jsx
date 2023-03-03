import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard.jsx";

export default function List()
{
    const [url, setURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=6&offset=0`);
    const [pokemons, setPokemons] = useState(null);
    const [nextURL, setNextURL] = useState(null);
    const [previousURL, setPreviousURL] = useState(null);
    
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
            setNextURL(results.next);
            setPreviousURL(results.previous);
        })
        .catch(error => console.log(error));
    }, [url]);

    function handleNextClick(e)
    {
        if(e.target.dataset.button === 'next')
        {
        setURL(nextURL);
        return;
        }
        
        setURL(previousURL);
    };

    function handlePokemonsQuantityChange(e)
    {
        if(e.target.value <= 300)
        {
            setURL(`https://pokeapi.co/api/v2/pokemon?limit=${e.target.value}&offset=0`);
            return;
        }

        const option = confirm('Opcion Experimental, podría consumir muchos recursos, ¿Deseas continuar?');

        if(option)
        {
            setURL(`https://pokeapi.co/api/v2/pokemon?limit=${e.target.value}&offset=0`);
        }
    }

    return (
        <div className="container text-center">
            <div className="d-flex row justify-content-center my-3">
                <div className="d-flex justify-content-end">
                    <select
                        className='my-3 p-2  text-center'
                        onChange={handlePokemonsQuantityChange}
                    >
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="60">60</option>
                        <option value="180">180</option>
                        <option value="300">300</option>
                        <option value="10000">ALL</option>
                    </select>
                </div>

                <div className="d-flex justify-content-around">
                    {nextURL ? <button data-button="next" type="button" className=" my-3 btn btn-dark px-5" onClick={handleNextClick}>Next</button> : null}

                    {previousURL ? <button data-button="previous" type="button" className=" my-3 btn btn-dark"  onClick={handleNextClick}>Previous</button> : null}
                </div>

                {pokemons && pokemons.map((pokemon, index) =>
                {
                    return(
                        <DisplayCard key={index} pokemonURL={pokemon.url} typePokemon={'all'}/>
                    )
                })}

                <div className="d-flex justify-content-around">
                    {nextURL ? <button data-button="next" type="button" className=" my-3 btn btn-dark px-5" onClick={handleNextClick}>Next</button> : null}

                    {previousURL ? <button data-button="previous" type="button" className=" my-3 btn btn-dark"  onClick={handleNextClick}>Previous</button> : null}
                </div>
            </div>
        </div>
    )
};