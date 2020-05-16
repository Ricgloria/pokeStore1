import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndBuyComponent } from './end-buy/end-buy.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [EndBuyComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class DialogsModule { }
