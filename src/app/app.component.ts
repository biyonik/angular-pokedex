import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import PokecardComponent from "./components/pokecard/pokecard.component";
import { IPokeModel } from './models/poke.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokecardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = `Angular ${VERSION.major}`;

  pokemon: IPokeModel = {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grass/Poison',
    experience: 64
  }
}
