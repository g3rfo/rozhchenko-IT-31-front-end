import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishCard } from '../../shared/models/dish-card';
import { RouterLink } from "@angular/router";
import { IngredientsListPipe } from '../../shared/pipes/ingredients-list-pipe';
import { ScaleOnHover } from '../../shared/directives/scale-on-hover';

@Component({
  selector: 'app-card',
  imports: [
    CommonModule,
    RouterLink,
    IngredientsListPipe,
    ScaleOnHover
  ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})

export class Card {
  @Input() item!: DishCard;
}
