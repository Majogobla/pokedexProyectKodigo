async function getPokemons(url, fn)
{
    fetch(url)
        .then(response => response.json())
        .then(result => fn(result));
};

export
{
    getPokemons
}