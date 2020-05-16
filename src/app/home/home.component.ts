import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../interfaces/pokemon-interface';
import {PokeStoreService} from '../api/poke-store.service';
import {FormControl} from '@angular/forms';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon: Pokemon[];
  filteredPokemon: Pokemon[];
  cartPokemon: Pokemon;
  filterControl = new FormControl();
  pokeImage = 'https://pokeres.bastionbot.org/images/pokemon/';
  loadState = true;

  constructor(
    private pokeStoreService: PokeStoreService,
    private homeService: HomeService
  ) {
  }

  ngOnInit(): void {
    this.getPokemonRequest();
    this.filter();
  }

  getPokemonRequest() {
    this.pokeStoreService.getPokemon().subscribe(data => {
      this.loadState = false;
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
    this.filteredPokemon = this.pokemon;
  }

  filter() {
    this.filterControl.valueChanges.subscribe(value => {
      if (value) {
        this.filteredPokemon = this.onFilter(value);
      } else {
        this.filteredPokemon = this.pokemon;
      }
    });
  }

  onFilter(value: string): Pokemon[] {
    const upperValue = value.toUpperCase();
    return this.pokemon.filter(pok => pok.pokemon.name.toUpperCase().includes(upperValue));
  }

  toCartPokemon(pokemon: Pokemon) {
    this.homeService.setCartPokemon(pokemon);
  }

}
