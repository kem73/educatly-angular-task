import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.dev';
import { IBlog } from '../types/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getArticles(pageIndex: number): Observable<IBlog[]> {
    const params = new HttpParams().set('page', pageIndex.toString());

    return this.http.get<IBlog[]>(`${this.apiUrl}articles`, { params });
  }
}
