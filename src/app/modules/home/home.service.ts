import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Pokemon} from '../../shared/interfaces/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private toCartPokemon = new BehaviorSubject<Pokemon>(undefined);

  constructor() {
  }

  public getCartPokemon() {
    return this.toCartPokemon;
  }

  public setCartPokemon(pokemon: Pokemon) {
    this.toCartPokemon.next(pokemon);
  }
}
