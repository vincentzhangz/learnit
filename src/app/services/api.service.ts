import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  public getCurrentUser(): Observable<any> {
    return this.httpClient.get(`${this.url}/user`, this.getHttpOptions());
  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

  public getAllCategory(): Observable<any>{
    return this.httpClient.get(
      `${this.url}/course/getallcategory`, 
      this.getHttpOptions()
    );
  }

  public getAllCourses():Observable<any>{
    return this.httpClient.get(
      `${this.url}/course/getcourse`, 
      this.getHttpOptions()
    );
  }

  public getHttpOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.getToken()}`
      })
    };
    return httpOptions;
  }


}
