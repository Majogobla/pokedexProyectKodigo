import { Component } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import FullCardDsiplay from './FullCardDisplay';

export class Main extends Component
{
    constructor()
    {
        super();

        this.state =
        {
            totalPokemons: 0,
            pokemonOne: null,
            pokemonTwo: null,
            pokemonThree: null,
        }
    }

    randomId = max => Math.floor(Math.random() * 1000) + 1;

    fetchTotalPokemons = async () =>
    {
        const response = await axios('https://pokeapi.co/api/v2/pokemon/');
        const total = response.data.count;
        this.setState(
            {
                totalPokemons: total
            }
        );
    }
    
    fetchPokemons = async () =>
    {
        const pokemonOne = await (await axios(`https://pokeapi.co/api/v2/pokemon/${this.randomId(this.state.totalPokemons)}`)).data;
        const pokemonTwo = await (await axios(`https://pokeapi.co/api/v2/pokemon/${this.randomId(this.state.totalPokemons)}`)).data;
        const pokemonThree = await (await axios(`https://pokeapi.co/api/v2/pokemon/${this.randomId(this.state.totalPokemons)}`)).data;
        
        this.setState(
            {
                pokemonOne,
                pokemonTwo,
                pokemonThree
            }
        )
    }

    componentDidMount()
    {
        this.fetchTotalPokemons();
        this.fetchPokemons();
    }

    render() 
    {
        return (
            <div className="cover-screen container-xl">
                <div className="mt-5 d-md-flex justify-content-center gap-5 align-items-center">
                    <h1 className='text-shadow text-white text-center mt-5'>La visión de Wizack para la</h1>

                    <div className='mx-auto d-flex justify-content-center mx-md-0'>
                        <img alt="PokéAPI" src={logo} style={{height: "auto"}} className="img-fluid"></img>
                    </div>
                </div>

                <h2 className='text-shadow text-white text-center mt-5'>Consultar la lista entera de los Pokemones hasta la fecha, ademas pueder ver una carta de tu Pokemon favorito</h2>

                <div className='row fs-1 text-white'>
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center'>
                        {this.state.pokemonOne ? <FullCardDsiplay pokemonObj={this.state.pokemonOne}/> : ""}
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center'>
                        {this.state.pokemonTwo ? <FullCardDsiplay pokemonObj={this.state.pokemonTwo}/> : ""}
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center'>
                        {this.state.pokemonThree ? <FullCardDsiplay pokemonObj={this.state.pokemonThree}/> : ""}
                    </div>
                </div>
            </div>
        )
    }
};

export default Main;