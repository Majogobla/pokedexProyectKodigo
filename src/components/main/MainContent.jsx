import { usePageContext } from "../../providers/pageProvider.jsx";
import About from "../pokemons/About.jsx";
import FullCard from "../pokemons/FullCard.jsx";
import List from "../pokemons/List.jsx";
import ListTypes from "../pokemons/ListTypes.jsx";
import Main from "../pokemons/Main.jsx";
import VoiceSearch from "../pokemons/VoiceSearch.jsx";

export default function MainContent()
{
    const page = usePageContext();

    return (
        <div>
            {page === 'main' ? <Main/> : ''}
            {page === 'catalogue' ? <List/> : ''}
            {page === 'types' ? <ListTypes/> : ''}
            {page === 'pokemon' ? <FullCard/> : ''}
            {page === 'voice' ? <VoiceSearch/> : ''}
            {page === 'about' ? <About/> : ''}
        </div>
    )
}
