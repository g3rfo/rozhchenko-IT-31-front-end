import { Component } from '@angular/core';
import { FilterBar } from "../../../filter-bar/filter-bar";
import { CardList } from "../../../card-list/card-list";

@Component({
  selector: 'app-dishes-page',
  imports: [FilterBar, CardList],
  templateUrl: './dishes-page.html',
  styleUrl: './dishes-page.css'
})
export class DishesPage {

}
