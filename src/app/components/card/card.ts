import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishCard } from '../../shared/models/dish-card';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})

export class Card implements OnChanges {
  @Input() item!: DishCard;
  @Input() openedCardId!: number | null;
  @Output() id = new EventEmitter<number | null>();

  isRecipeOpen: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['openedCardId']) {
      this.isOpen();
    }
  }

  isOpen() : void {
    this.isRecipeOpen = this.openedCardId === this.item.id;
  }

  onRecipeOpen() : void {
    this.id.emit(this.item.id);
    this.isRecipeOpen = true;
  }

  onRecipeClose() : void {
    this.id.emit(null);
    this.isRecipeOpen = false;
  }
}
