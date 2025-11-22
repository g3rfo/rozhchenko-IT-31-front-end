import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishCard } from '../../shared/models/dish-card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})

export class Card {
  @Input() item!: DishCard;
}
