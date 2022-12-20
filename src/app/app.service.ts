import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  create( data: {} ) 
  {
    console.log("data:", data)
    return this.http.post(this.baseUrl, data);
  }
}
