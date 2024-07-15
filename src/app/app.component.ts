import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import PokedexComponent from "./components/pokedex/pokedex.component";
import PokegameComponent from "./components/pokegame/pokegame.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexComponent, PokegameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = `Angular ${VERSION.major}`;
}
