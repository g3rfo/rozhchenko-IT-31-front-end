import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";
import { ScaleOnHover } from '../../shared/directives/scale-on-hover';
import { Auth } from '../../services/auth/auth';

@Component({
  selector: 'app-auth-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ScaleOnHover],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.css'
})
export class AuthForm {
  errorMsg: string | null = null;

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private auth: Auth
  ) {}

  switchToReg() {
    this.router.navigate(['/reg']);
  }

  get f() { return this.authForm.controls; }

  onSubmit() {
    this.errorMsg = null;

    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }

    this.auth.login(this.authForm.value).subscribe({
      next: () => this.router.navigate(['/dishes']),
      error: (err) => {
        this.errorMsg = err.message;
      }
    });
  }
}
