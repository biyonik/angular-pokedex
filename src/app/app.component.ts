import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import PokedexComponent from "./components/pokedex/pokedex.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = `Angular ${VERSION.major}`;
}
