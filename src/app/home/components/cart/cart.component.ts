import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../../interfaces/pokemon-interface';
import {HomeService} from '../../home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  pokemonOnCart: Pokemon[];
  total = 0;

  constructor(
    private homeService: HomeService
  ) {
  }

  ngOnInit(): void {
    this.pokemonArrayBuilder();
  }

  pokemonArrayBuilder() {
    this.pokemonOnCart = [];
    this.homeService.getCartPokemon().subscribe(value => {
      if (value) {
        this.pokemonOnCart.push(value);
        this.total += value.pokemon.price;
      }
    });
  }

  onDeletePokemonCartItem(index: number) {
    const deletedPokemon = this.pokemonOnCart.splice(index, 1);
    this.total -= deletedPokemon[0].pokemon.price;
  }
}
