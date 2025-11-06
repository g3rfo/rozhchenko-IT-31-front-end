import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishCard } from '../../shared/models/dish-card';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})

export class Card {
  @Input() item!: DishCard;
  isRecipeOpen: boolean = false;
}
