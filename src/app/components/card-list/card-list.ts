import { Component } from '@angular/core';
import { DishCard } from "../card/card";

@Component({
  selector: 'app-card-list',
  imports: [DishCard],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css'
})
export class CardList {

}
