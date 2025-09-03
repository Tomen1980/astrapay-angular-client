import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  noteForm: FormGroup;
  flashMessage: String | null = null;

   constructor(private fb: FormBuilder, private _http: HttpService, private router: Router) {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.noteForm.valid) {
      console.log('Form Data:', this.noteForm.value);
      this._http.postApiData(this.noteForm.value).subscribe({
        next: (res) => {
          console.log('Note created successfully:', res);
          this.flashMessage = "Note created successfully!";
          this.noteForm.reset();
          setTimeout(()=>{
            this.flashMessage = null;
            this.router.navigate(['/notes']);
          }, 2000)
        },
        error: (err) => {
          this.flashMessage = "Error creating note!";
          console.error('Error creating note:', err);
        }
      });
    }
  }
}
