import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Forum} from 'src/app/models/forum';

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

  public createCourse(course: any): Observable<any> {
    return this.httpClient.post(`${this.url}/course/`, course);
  }

  public getCurrentUser(): Observable<any> {
    return this.httpClient.get(
      `${this.url}/user`,
      this.getHttpOptions());
  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

  public getAllCategory(): Observable<any> {
    return this.httpClient.get(
      `${this.url}/course/category`,
      this.getHttpOptions()
    );
  }

  public getAllCourses(): Observable<any> {
    return this.httpClient.get(
      `${this.url}/course`,
      this.getHttpOptions()
    );
  }

  public getCourseById(id: string): Observable<any> {
    return this.httpClient.get(
      `${this.url}/course/${id}`,
      this.getHttpOptions()
    );
  }

  public getTopCourse(): Observable<any> {
    return this.httpClient.get(
      `${this.url}/course/top/10`,
      this.getHttpOptions());
  }

  public postForum(forum: Forum): void {
    this.httpClient.post(`${this.url}/forum`, forum);
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
