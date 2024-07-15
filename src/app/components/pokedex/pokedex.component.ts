import { Component, computed, input, InputSignal, signal, Signal } from "@angular/core";
import PokecardComponent from "../pokecard/pokecard.component";
import { IPokeModel } from "../../models/poke.model";

 @Component({
    standalone: true,
    selector: 'app-pokedex',
    template: `
        <div class="pokedex">
            <h1>Pokedex!</h1>
            <p>Total Experience: {{ experience() }}</p>

            @let winner = isWinner();
            @if (winner) {
                <p>You won!</p>
            } @else {
                <p>You lost!</p>
            }
            
            <div class="pokedex-cards">
            @for (pokemon of pokemons(); track pokemon.id) {
                <app-pokecard [pokemon]="pokemon"></app-pokecard>
            } @empty {
                <p>Any pokemon not found!</p>
            }
            </div>
        </div>
    `,
    styles: [`
        .pokedex-cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            gap: 1rem;
        }    
    `],
    imports: [PokecardComponent]
 })
 export default class PokedexComponent {
    pokemons = input<IPokeModel[]>([]);
    experience = input<number>(0);
    isWinner = input<boolean>(false);
 }