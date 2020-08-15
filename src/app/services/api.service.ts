import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = 'http://127.0.0.1:8080';
  url = `${this.host}/api/v1/`;


  constructor(private httpClient: HttpClient) {

  }

  public login(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}login`, user);
  }
}
