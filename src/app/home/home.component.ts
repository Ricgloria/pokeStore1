import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../interfaces/pokemon-interface';
import {PokeStoreService} from '../api/poke-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon: Pokemon[];
  pokeImage = 'https://pokeres.bastionbot.org/images/pokemon/';

  constructor(
    private pokeStoreService: PokeStoreService
  ) {
  }

  ngOnInit(): void {
    this.getPokemonRequest();
  }

  getPokemonRequest() {
    this.pokeStoreService.getPokemon().subscribe(data => {
      this.pokemon = data.pokemon;
      this.getUrlImage();
    });
  }

  getUrlImage() {
    const max = 1000.00;
    const min = 1.00;
    this.pokemon.forEach(poke => {
      const result = /\/([0-9]+)\//g.exec(poke.pokemon.url);
      poke.pokemon.image = `${this.pokeImage}${result[1]}.png`;
      const price = Math.random() * (max - min) + min;
      poke.pokemon.price = parseFloat(price.toFixed(2));
    });
  }
}
