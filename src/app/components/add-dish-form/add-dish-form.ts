import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DishCard } from '../../shared/models/dish-card';
import { Data } from '../../services/data/data';
import { CommonModule } from '@angular/common';
import { ScaleOnHover } from "../../shared/directives/scale-on-hover";

@Component({
  selector: 'app-add-dish-form',
  imports: [CommonModule, ReactiveFormsModule, ScaleOnHover],
  templateUrl: './add-dish-form.html',
  styleUrl: './add-dish-form.css'
})
export class AddDishForm {
  dishForm: FormGroup;

  constructor(private dataService: Data, private router: Router) {
    this.dishForm = new FormGroup({
      title: new FormControl('', Validators.required),
      imgUrl: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cookingTime: new FormControl('', [Validators.required, Validators.min(1)]),
      complexity: new FormControl('', Validators.required),
      servingFor: new FormControl('', [Validators.required, Validators.min(1)]),
      ingredients: new FormControl('', Validators.required),
      recipe: new FormControl('', Validators.required)
    });
  }

  get f() { return this.dishForm.controls; }

  onSubmit() {
    if (this.dishForm.invalid) {
      this.dishForm.markAllAsTouched();
      return;
    }

    const formValue = this.dishForm.value;

    const ingredientsArray = formValue.ingredients.split(',').map((i: string) => i.trim());

    const newDish: DishCard = {
      id: '',
      title: formValue.title,
      imgUrl: formValue.imgUrl,
      description: formValue.description,
      cookingTime: +formValue.cookingTime,
      complexity: formValue.complexity,
      servingFor: +formValue.servingFor,
      ingredients: ingredientsArray,
      recipe: formValue.recipe
    };

    this.dataService.addDish(newDish).subscribe({
      next: () => this.router.navigate(['/dishes']),
      error: (err) => console.error('Failed to add dish', err)
    });
  }
}
