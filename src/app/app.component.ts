import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Bienvenue {{title}}!</h1>
    <h3>Choix numéro 1 : {{pokemons[1]}}</h3>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Application Pokémon!';
  pokemons = ["Bulbizare" , "Salaméche", "Carapuce"];
}
