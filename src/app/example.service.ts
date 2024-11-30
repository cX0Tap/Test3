
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('your-api-endpoint');
  }
}