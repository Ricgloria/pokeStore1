import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../../../../shared/interfaces/pokemon-interface';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() toCartPokemon = new EventEmitter<Pokemon>(undefined);

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.toCartPokemon.emit(this.pokemon);
  }

}
