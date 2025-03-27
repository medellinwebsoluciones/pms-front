import { Component } from '@angular/core';
import { ImportsModule } from '../../shared/imports';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ImportsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    user: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(6)]),
    password: new FormControl("", [Validators.required, Validators.minLength(10)])
  })

  validateForm() {
    if (this.loginForm.invalid) {
      console.log('this.loginForm :>> ', this.loginForm);
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log('Formulario válido:', this.loginForm.value);
  }

  fieldInvalid(field: string): boolean | undefined {
    const control = this.loginForm.get(field);
    return control?.invalid && control?.touched;
  }
}
