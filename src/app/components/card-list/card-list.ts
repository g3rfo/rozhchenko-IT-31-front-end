import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishCard } from "../../shared/models/dish-card";
import { Card } from '../card/card';
import { Data } from '../../services/data/data';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
  imports: [CommonModule, Card]
})

export class CardList implements OnInit {
  // handle cards data
  items: DishCard[] = [];

  constructor(private dataServise: Data) {}

  ngOnInit(): void {
    this.items = this.dataServise.getItems();
  }


  // handle filtering
  @Input() searchInput! : string;
  @Input() selectedDifficulty!: string;
  @Input() selectedCookTime!: string;

  getFilteredItems(): DishCard[] {
    const input = (this.searchInput || '').trim().toLowerCase();
    const difficulty = this.selectedDifficulty || 'All Difficulties';
    const cookTime = this.selectedCookTime || 'All Cook Times';

    return this.items.filter(item => {
      const matchesText =
        !input || item.title.toLowerCase().includes(input);

      const matchesDifficulty =
        difficulty === 'All Difficulties' || item.complexity === difficulty;

      const matchesCookTime =
        cookTime === 'All Cook Times' ||
        (cookTime === 'Under 20 min' && item.cookingTime < 20) ||
        (cookTime === '20-40 min' && item.cookingTime >= 20 && item.cookingTime <= 40) ||
        (cookTime === 'Over 40 min' && item.cookingTime > 40);

      return matchesText && matchesDifficulty && matchesCookTime;
    });
  }

  // handle card recipe opening
  openedCardId : number | null = null;

  getNewOpenedCardId(id : number | null) : void {
    this.openedCardId = id;
  }
}
