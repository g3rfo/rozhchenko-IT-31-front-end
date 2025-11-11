import { Component } from '@angular/core';
import { CardList } from "../../card-list/card-list";
import { FilterBar } from '../../filter-bar/filter-bar';

@Component({
  selector: 'app-main',
  imports: [FilterBar, CardList],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  sharedText : string = '';
  selectedDifficulty: string = 'All Difficulties'; 
  selectedCookTime: string = 'All Cook Times';
}
