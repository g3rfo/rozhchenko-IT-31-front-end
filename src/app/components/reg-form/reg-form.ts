import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ScaleOnHover } from '../../shared/directives/scale-on-hover';
import { Auth } from '../../services/auth/auth';

@Component({
  selector: 'app-reg-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ScaleOnHover],
  templateUrl: './reg-form.html',
  styleUrl: './reg-form.css'
})
export class RegForm {
  errorMsg: string | null = null;

  regForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private auth: Auth) {}

  switchToAuth() {
    this.router.navigate(['/auth']);
  }

  get f() { return this.regForm.controls; }

  onSubmit() {
    this.errorMsg = null;

    if (this.regForm.invalid) {
      this.regForm.markAllAsTouched();
      return;
    }

    this.auth.register(this.regForm.value).subscribe({
      next: () => {
        alert('Account created!');
        this.router.navigate(['/auth']);
      },
      error: (err) => {
        this.errorMsg = err.message;
      }
    });
  }
}
