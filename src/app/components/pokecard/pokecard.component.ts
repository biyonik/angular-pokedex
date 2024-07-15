import { Component, computed, input, InputSignal, Signal } from "@angular/core";
import { IPokeModel } from "../../models/poke.model";

// const POKE_IMAGE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_IMAGE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

 @Component({
    standalone: true,
    selector: 'app-pokecard',
    template: `
        <div class="pokecard">
            <h1 class="pokecard-title">{{ pokemon().name }}</h1>
            <div class="pokecard-image">
                <img [src]="pokeImage()" alt="{{ pokemon().name }}">
            </div>
            <div class="pokecard-data">Type: {{ pokemon().type }}</div>
            <div class="pokecard-data">Experience: {{ pokemon().experience }}</div>
        </div>
    `,
    styles: [`
        .pokecard {
            width: 300px;
            padding: 1rem;
            margin: 1rem;
            box-shadow: 7px 10px 12px -5px rgba(0,0,0, 0.56);
            text-align: center;
            background-color: white;
            border-radius: 4px;

            &-title {
                font-size: 1.5rem;
            }

            &-data {
                font-size: 80%;
            }

            &-image {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;
                height: 200px;
                background-color: #eceff1;
                border-radius: 4px;
                margin : 1rem 0;

                img {
                    max-width: 100%;
                    max-height: 100%;
                }

                img:hover {
                    transform: scale(1.25);
                    transition: all 0.5s ease-in-out;
                    cursor: pointer;
                }
            }
        }    
    `]
 })
 export default class PokecardComponent {
    pokemon: InputSignal<IPokeModel> = input.required<IPokeModel>();

    pokeIdPadToThree: Signal<string | number> = computed(() => {
        return this.pokemon().id <= 999 ? `00${this.pokemon().id}`.slice(-3) : this.pokemon().id
    });

    pokeImage: Signal<string> = computed(() => POKE_IMAGE_API + this.pokeIdPadToThree() + '.png');
 }