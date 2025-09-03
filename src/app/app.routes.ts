import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { FormComponent } from './notes/form/form.component';

export const routes: Routes = [
    {
        path: "", component:HomeComponent
    },
    {
        path: "notes", component: NotesComponent
    },
    {
        path: "notes/form", component: FormComponent
    }
];
