import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCountPipe } from './view-count/view-count.pipe';

@NgModule({
  declarations: [ViewCountPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ViewCountPipe
  ]
})
export class PipesModule { }
