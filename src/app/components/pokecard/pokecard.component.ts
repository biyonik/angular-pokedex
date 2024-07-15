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
            <img [src]="pokeImage()" alt="{{ pokemon().name }}">
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