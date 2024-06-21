import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  exports: [
    CardComponent,
    MatTooltipModule
  ]
})
export class SharedModule { }
