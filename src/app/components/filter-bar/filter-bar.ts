import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css'
})
export class FilterBar {
  @Input() searchInput! : string;
  @Output() searchInputChange = new EventEmitter<string>();

  @Input() selectedDifficulty!: string;
  @Output() selectedDifficultyChange = new EventEmitter<string>();

  @Input() selectedCookTime!: string;
  @Output() selectedCookTimeChange = new EventEmitter<string>();

  difficulties : string[] = ['All Difficulties', 'Easy', 'Medium', 'Hard'];
  cookTimes : string[] = ['All Cook Times', 'Under 20 min', '20-40 min', 'Over 40 min'];
}
