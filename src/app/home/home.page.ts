import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  emailForm: FormGroup;
  message: string | null = null;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.emailForm.get('email')!;
  }

  onSubmit() {
    if (this.emailForm.valid) {
      this.message = `Correo enviado a: ${this.email.value}`;
    } else {
      this.message = null;
    }
  }
}
