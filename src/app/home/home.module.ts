import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {MatCardModule} from '@angular/material/card';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [HomeComponent, PokeCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ],
  exports: [HomeComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ]
})
export class HomeModule { }
