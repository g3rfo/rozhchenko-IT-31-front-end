import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../../services/data/data';
import { DishCard } from '../../shared/models/dish-card';
import { CommonModule } from '@angular/common';
import { ScaleOnHover } from '../../shared/directives/scale-on-hover';

@Component({
  selector: 'app-card-details',
  imports: [CommonModule, ScaleOnHover],
  templateUrl: './card-details.html',
  styleUrl: './card-details.css'
})
export class CardDetails {
  item!: DishCard;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: Data
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const dish = this.dataService.getItemById(id);

    if (!dish) {
      this.router.navigate(['not-found-render'], { skipLocationChange: true })
      return;
    }

    this.item = dish;
  }

  onClose() : void {
    this.router.navigate(['/items']);
    return;
  }
}
