import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../../services/auth/auth';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit, OnDestroy{
  isAuth = false;
 private sub!: Subscription;

  constructor(private auth: Auth) {}

  ngOnInit() {
    this.sub = this.auth.authState$.subscribe(state => {
      this.isAuth = state;
    });
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
