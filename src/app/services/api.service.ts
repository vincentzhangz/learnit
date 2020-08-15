import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = 'http://127.0.0.1:8080';
  url = `${this.host}/api/v1`;


  constructor(private httpClient: HttpClient) {

  }

  public login(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/login`, user);
  }

  public register(user: any): Observable<any> {
    return this.httpClient.post(`${this.url}/register`, user);
  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

  public getAllCategory(): Observable<any>{
    return this.httpClient.get(`${this.url}/course/getallcategory`);
  }

}
