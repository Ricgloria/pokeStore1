import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonInterface} from '../interfaces/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class PokeStoreService {

  private dataApi = environment.pokeApi;
  private pokemonType = 'type/fire/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getPokemon(): Observable<PokemonInterface> {
    return this.httpClient.get<PokemonInterface>(`${this.dataApi}${this.pokemonType}`);
  }
}
