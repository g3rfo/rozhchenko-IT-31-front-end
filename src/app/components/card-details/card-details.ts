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
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.dataService.getItemById(id).subscribe({
      next: dish => {
        if (!dish) {
          this.router.navigate(['not-found-render'], { skipLocationChange: true });
          return;
        }
        this.item = dish;
      },
      error: () => {
        this.router.navigate(['not-found-render'], { skipLocationChange: true });
      }
    });
  }

  onClose() : void {
    this.router.navigate(['/dishes']);
    return;
  }
}
