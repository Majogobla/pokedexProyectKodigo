import React, { useEffect, useState } from 'react';
import FullCardDsiplay from './FullCardDisplay';
import './VoiceSearch.css';

export default function VoiceSearch()
{
    const [pokemonSearch, setPokemonSearch] = useState('bad-request');
    const [pokemon, setPokemon] = useState(null);

    useEffect(() =>
    {
        fetchPokemon();
    }, 
    [pokemonSearch]);

    async function fetchPokemon()
    {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`);
        
        if(response.ok)
        {
            const result = await response.json();
            setPokemon(result);
        }
        else
        {
            setPokemon(null);
        }
    }

    function handleFormSubmit(e)
    {
        e.preventDefault();
        if(e.target[0].value.toLowerCase().trim() !== '')
        {
            setPokemonSearch(e.target[0].value.toLowerCase().trim());
        }
    }

    function handleVoiceSearch()
    {
        const SpeechRecognition = webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        const spinner = document.querySelector('#spinner');

        recognition.start();

        recognition.onstart = function()
        {
            // console.log('Escuchando');
            spinner.classList.remove('spinner-hide');
        }

        recognition.onspeechend = function()
        {
            // console.log('Se dejo de grabar');
            recognition.stop();
            spinner.classList.add('spinner-hide');
        }

        recognition.onresult = function(e)
        {
            // console.log(e.results[0][0]);
            const { confidence, transcript } = e.results[0][0];

            if(transcript.toLowerCase().trim() !== '')
            {
                setPokemonSearch(transcript.toLowerCase().trim());
            }
        }
    }

    function handleReturn()
    {
        setPokemon(null);
    }

    if(pokemon)
    {
        return(
            <div className='cover-screen'>
                <FullCardDsiplay pokemonObj={pokemon}/>

                <div className='d-grid gap-2 col-4 mx-auto mb-5'>
                    <button className='btn btn-primary' onClick={handleReturn}>Regresar</button>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div className='container my-5 cover-screen'>
                <form onSubmit={handleFormSubmit} className='w-100 justify-content-center'>
                    <label className='form-label text-center text-white d-block fs-3 fw-bold'>Nombre del Pokemon o ID</label>
                    <div className='d-flex'>
                        <input type="text" className='form-control form-control-lg text-center rounded-0 rounded-start-pill' placeholder='Pokemon Name or ID' name='pokemon'/>

                        <button className='btn btn-warning rounded-0 rounded-end-pill px-3 pe-4' onClick={handleVoiceSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
                                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </button>
                    </div>

                    <div className='d-grid gap-2 col-2 mx-auto my-3'>
                        <input type="submit" className='btn btn-primary' value="Buscar"/>
    
                        
    
                        <div className="spinner spinner-hide" id='spinner'>
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}