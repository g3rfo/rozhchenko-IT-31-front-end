import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishCard } from "../../shared/models/dish-card";
import { Card } from '../card/card';
import { Data } from '../../services/data/data';
import { Subscription } from 'rxjs';
import { NotFoundMessage } from "../not-found-message/not-found-message";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
  imports: [CommonModule, Card, NotFoundMessage]
})

export class CardList implements OnInit {
  // handle cards data
  items: DishCard[] = [];
  private dataSub!: Subscription;

  constructor(private dataServise: Data) {}

  ngOnInit(): void {
    this.dataSub = this.dataServise.items$.subscribe(res => {
      this.items = res;
    })
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
