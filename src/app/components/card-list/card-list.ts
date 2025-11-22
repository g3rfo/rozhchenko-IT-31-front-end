import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishCard } from "../../shared/models/dish-card";
import { Card } from '../card/card';
import { Data } from '../../services/data/data';
import { Observable } from 'rxjs';
import { NotFoundMessage } from "../not-found-message/not-found-message";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
  imports: [CommonModule, Card, NotFoundMessage]
})

export class CardList {
  items$!: Observable<DishCard[]>;

  constructor(private dataServise: Data) {
    this.items$ = this.dataServise.items$;
  }
}
