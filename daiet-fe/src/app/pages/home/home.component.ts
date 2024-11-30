import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private formBuilder: FormBuilder) {}

  chatbotForm: FormGroup = this.formBuilder.group({
    allergeni: [''],
    farmaci: [''],
    patologie: [''],
    vitalSigns: [''],
    richiesta: [''],
  });
  submit() {
    console.log(this.chatbotForm.value);
  }
}
