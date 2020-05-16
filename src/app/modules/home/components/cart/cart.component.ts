import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../../shared/interfaces/pokemon-interface';
import {HomeService} from '../../home.service';
import {MatDialog} from '@angular/material/dialog';
import {EndBuyComponent} from '../../../../shared/dialogs/end-buy/end-buy.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  pokemonOnCart: Pokemon[];
  total = 0;

  constructor(
    private homeService: HomeService,
    private dialogRef: MatDialog
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
        this.total = this.sumTotal();
      }
    });
  }

  sumTotal(): number {
    return this.pokemonOnCart.reduce((sum, pokemon) => {
      return sum + pokemon.pokemon.price;
    }, 0);
  }

  onDeletePokemonCartItem(index: number) {
    this.pokemonOnCart.splice(index, 1);
    this.total = this.sumTotal();
  }

  onFinishedBuyClick() {
    this.dialogRef.open(EndBuyComponent, {
      data: {
        length: this.pokemonOnCart.length,
        totalValue: this.total
      }
    });
    this.pokemonOnCart = [];
    this.total = 0;
  }
}
