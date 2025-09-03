import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Note } from '../dto/note.dto';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NgIf,NgFor,RouterLink],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  notes:Note[] = [];
  constructor(private _http:HttpService){
  }

  ngOnInit(): void {
    this._http.getApidata().subscribe({
      next: (res) => {
        this.notes = res.data;
        console.log(this.notes);
      },
      error: (err) => {
        console.error('Error fetching notes:', err);
      }
    });
  }

  deleteNote(id: number) {
  if (confirm('Are you sure you want to delete this note?')) {
    this._http.deleteApiData(id).subscribe({
      next: () => {
        this.notes = this.notes.filter(note => note.id !== id);
      },
      error: (err) => {
        console.error('Failed to delete note:', err);
      }
    });
  }
}

}

