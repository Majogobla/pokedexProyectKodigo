import foto from '../../assets/foto.png';
import FullCardDsiplay from './FullCardDisplay';

function About() 
{
    const author =
    {
        name: "Marcos Godoy /  Wizack",
        id: 0,
        sprites:
        {
            front_default: foto
        },
        types: [{
            type: {
                name: "Programmer"
            }
        }],
        base_experience: 0,
        stats: [
            {
                stat: {
                    name: "Hp",
                },
                base_stat: -1
            },
            {
                stat: {
                    name: "Attack",
                },
                base_stat: -1
            },
            {
                stat: {
                    name: "Defense",
                },
                base_stat: -1
            },
        ],
        abilities: [
            {
                ability: 
                {
                    name: "Sleep"
                },
            },
            {
                ability: 
                {
                    name: "Eat"
                },
            },
            {
                ability: 
                {
                    name: "Die"
                },
            },
        ],
        height: 5.6,
        weight: 165,
    }

    return (
        <div className="cover-screen">
            <FullCardDsiplay pokemonObj={author}/>
        </div>
    )
}

export default About