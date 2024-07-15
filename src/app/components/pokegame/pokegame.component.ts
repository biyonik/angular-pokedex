import { Component, computed, Signal, signal } from "@angular/core";
import { POKE_DATA } from "../../data/pokemon.data";
import { IPokeModel } from "../../models/poke.model";
import PokedexComponent from "../pokedex/pokedex.component";

@Component({
    standalone: true,
    selector: 'app-pokegame',
    template: `
        <div class="pokegame">
            <app-pokedex [pokemons]="firstHand()" [experience]="firstHandExperience()" [isWinner]="firstHandExperience() > secondHandExperience()"/>
            <app-pokedex [pokemons]="secondHand()" [experience]="secondHandExperience()" [isWinner]="secondHandExperience() > firstHandExperience()"/>
        </div>
    `,
    styles: [`
        .pokegame {

        }
    `
    ],
    imports: [PokedexComponent]
})
export default class PokegameComponent {
    firstHand: Signal<IPokeModel[]> = signal([]);
    secondHand: Signal<IPokeModel[]> = signal(POKE_DATA);

    computedHand: Signal<void> = computed(() => {
        while(this.firstHand().length < this.secondHand().length) {
            let randIdx = Math.floor(Math.random() * this.secondHand().length);
            let randPoke = this.secondHand().splice(randIdx, 1)[0];
            this.firstHand().push(randPoke);
        }
    });

    firstHandExperience = computed(() => {
        return this.firstHand().reduce((acc, curr) => acc + curr.experience, 0);
    })

    secondHandExperience = computed(() => {
        return this.secondHand().reduce((acc, curr) => acc + curr.experience, 0);
    })



    constructor() {
        this.computedHand();
    }

 }