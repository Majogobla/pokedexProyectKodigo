import { useState, useContext, createContext } from "react";

const pageContext = createContext();
const pageToggleContext = createContext();

const pokemonContext = createContext();
const pokemonToggleContext = createContext();

export function usePageContext()
{
    return useContext(pageContext);
}

export function usePageToggleContext()
{
    return useContext(pageToggleContext);
}

export function usePokemonContext()
{
    return useContext(pokemonContext);
}

export function usePokemonToggleContext()
{
    return useContext(pokemonToggleContext);
}

export function PageProvider({children})
{
    const [page, setPage] = useState('main');
    const [pokemon, setPokemon] = useState('');

    const changePage = (page) =>
    {
        setPage(page);
    }

    const changePokemon = (pokemon) =>
    {
        setPokemon(pokemon);
    }

    return (
        <pageContext.Provider value={page}>
            <pageToggleContext.Provider value={changePage}>
                <pokemonContext.Provider value={pokemon}>
                    <pokemonToggleContext.Provider value={changePokemon}>
                        {children}
                    </pokemonToggleContext.Provider>
                </pokemonContext.Provider>
            </pageToggleContext.Provider>
        </pageContext.Provider>
    );
}