import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { LinkComponent } from './link/link.component';
import { SkeletonComponent } from './skeleton/skeleton.component';

@NgModule({
  declarations: [
    CardComponent,
    LinkComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    RouterModule,
  ],
  exports: [
    CardComponent,
    MatTooltipModule,
    SkeletonComponent
  ]
})
export class SharedModule { }
