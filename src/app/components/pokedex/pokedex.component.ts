import { Component, computed, input, InputSignal, signal, Signal } from "@angular/core";
import PokecardComponent from "../pokecard/pokecard.component";
import { IPokeModel } from "../../models/poke.model";

 @Component({
    standalone: true,
    selector: 'app-pokedex',
    template: `
        <div class="pokedex">
            <h1>Pokedex!</h1>
            <p class="pokedex-total">Total Experience: {{ experience() }}</p>

            @let winner = isWinner();
            @if (winner) {
                <p class="pokedex-winner">You won!</p>
            } @else {
                <p class="pokedex-loser">You lost!</p>
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

        .pokedex {
            text-align: center;

            &-winner, &-loser {
                font-size: 2rem;
            }

            &-winner {
                color: #4caf50;
            }

            &-loser {
                color: #e91e63;
            }

            &-cards {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                gap: 1rem;
            }

            &-total {
                font-size: 1.5rem;
            }
        }
    `],
    imports: [PokecardComponent]
 })
 export default class PokedexComponent {
    pokemons = input<IPokeModel[]>([]);
    experience = input<number>(0);
    isWinner = input<boolean>(false);
 }