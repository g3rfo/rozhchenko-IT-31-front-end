import { Component } from '@angular/core';
import { FilterBar } from '../../filter-bar/filter-bar';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main',
  imports: [FilterBar, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
