import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './dto/baseResponse.dto';
import { NoteCreateDto } from './dto/note.dto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://localhost:8000/api/v1/notes';
  constructor(private http: HttpClient) { }

  getApidata():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.apiUrl)
  }

  deleteApiData(id:number):Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  postApiData(data: NoteCreateDto):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.apiUrl, data);
  }
}
