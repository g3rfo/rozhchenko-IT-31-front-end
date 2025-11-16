import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../../services/data/data';

@Component({
  selector: 'app-filter-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css'
})
export class FilterBar {
  searchInput: string = '';
  selectedDifficulty: string = 'All Difficulties';
  selectedCookTime: string = 'All Cook Times';

  difficulties : string[] = ['All Difficulties', 'Easy', 'Medium', 'Hard'];
  cookTimes : string[] = ['All Cook Times', 'Under 20 min', '20-40 min', 'Over 40 min'];

  constructor(private dataService: Data) {}

  onSearchChange() {
    this.dataService.updateSearch(this.searchInput);
  }

  onDifficultyChange() {
    this.dataService.updateDifficulty(this.selectedDifficulty);
  }

  onCookTimeChange() {
    this.dataService.updateCookTime(this.selectedCookTime);
  }
}
