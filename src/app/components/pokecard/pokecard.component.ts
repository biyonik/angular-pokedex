import { Component, computed, input, InputSignal, Signal } from "@angular/core";
import { IPokeModel } from "../../models/poke.model";

const POKE_IMAGE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

 @Component({
    standalone: true,
    selector: 'app-pokecard',
    template: `
        <div class="pokecard">
            <h1>{{ pokemon().name }}</h1>
            <img [src]="pokeImage()" alt="{{ pokemon().name }}">
            <div>Type: {{ pokemon().type }}</div>
            <div>Experience: {{ pokemon().experience }}</div>
        </div>
    `,
    styles: [`
        .pokecard {
            border: 2px solid mediumseagreen;
        }    
    `]
 })
 export default class PokecardComponent {
    pokemon: InputSignal<IPokeModel> = input.required<IPokeModel>();

    pokeImage: Signal<string> = computed(() => POKE_IMAGE_API + this.pokemon().id + '.png');
 }