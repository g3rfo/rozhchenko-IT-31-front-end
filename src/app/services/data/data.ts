import { Injectable } from '@angular/core';
import { DishCard } from '../../shared/models/dish-card';
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Data {
  private originalDishes: DishCard[] = [];

  private itemsSubject = new BehaviorSubject<DishCard[]>([]);
  items$ = this.itemsSubject.asObservable();

  private searchText: string = '';
  private difficulty: string = 'All Difficulties';
  private cookTime: string = 'All Cook Times';

  constructor(private http: HttpClient) {
    this.loadDishes();
  }

  private loadDishes() {
    this.http.get<DishCard[]>('dishes')
      .pipe(
        catchError(err => {
          console.error('Error loading dishes', err);
          return of([]);
        })
      )
      .subscribe(data => {
        this.originalDishes = data;
        this.itemsSubject.next(data);
      });
  }

  getItemById(id: string): Observable<DishCard | undefined> {
    return this.http.get<DishCard>(`dishes/${id}`).pipe(
      catchError(() => of(undefined))
    );
  }

  addDish(dish: DishCard): Observable<DishCard> {
    dish.id = dish.title.trim().toLowerCase().replace(/\s+/g, '-');

    return this.http.post<DishCard>('dishes', dish).pipe(
      catchError(err => throwError(() => err)),
      tap((createdDish) => {
        this.originalDishes = [...this.originalDishes, createdDish];
        const current = this.itemsSubject.getValue();
        this.itemsSubject.next([...current, createdDish]);
      })
    );
  }
  
  updateSearch(text: string) {
    this.searchText = text.toLowerCase().trim();
    this.applyFilters();
  }

  updateDifficulty(diff: string) {
    this.difficulty = diff;
    this.applyFilters();
  }

  updateCookTime(time: string) {
    this.cookTime = time;
    this.applyFilters();
  }

  private applyFilters() {
    const filtered = this.originalDishes.filter(item => {
      const matchesText =
        !this.searchText || item.title.toLowerCase().includes(this.searchText);

      const matchesDifficulty =
        this.difficulty === 'All Difficulties' ||
        item.complexity === this.difficulty;

      const matchesCookTime =
        this.cookTime === 'All Cook Times' ||
        (this.cookTime === 'Under 20 min' && item.cookingTime < 20) ||
        (this.cookTime === '20-40 min' && item.cookingTime >= 20 && item.cookingTime <= 40) ||
        (this.cookTime === 'Over 40 min' && item.cookingTime > 40);

      return matchesText && matchesDifficulty && matchesCookTime;
    });

    this.itemsSubject.next(filtered);
  }
}
