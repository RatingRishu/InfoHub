import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BodyService {

  private apiUrl = 'https://api.github.com/repos';

  constructor(private http: HttpClient) { }

  getStarCount(owner: string, repo: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${owner}/${repo}`);
  }
}
