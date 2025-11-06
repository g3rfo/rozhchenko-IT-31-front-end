import { Component } from '@angular/core';
import { CardList } from "../../card-list/card-list";

@Component({
  selector: 'app-main',
  imports: [CardList],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
