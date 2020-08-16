import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Forum} from 'src/app/models/forum';
import {Thread} from 'src/app/models/thread';
import {Comment} from '../models/comment';

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
    return this.httpClient.post(`${this.url}/course/`, course,
      this.getHttpOptions());
  }
  public updateCourse(course: any): Observable<any> {
    return this.httpClient.post(`${this.url}/course/update`, course,this.getHttpOptions());
  }
  public insertCourseMaterial(material: any): Observable<any> {
    return this.httpClient.post(`${this.url}/course/material`, material,this.getHttpOptions());
  }
  public updateCourseMaterial(material: any): Observable<any> {
    return this.httpClient.post(`${this.url}/course/material/update`, material,this.getHttpOptions());
  }
  public deleteCourseMaterial(materialid : string){
    return this.httpClient.get(
      `${this.url}/course/material/delete/${materialid}`, this.getHttpOptions()
    );
  }
  public getUserCourses(userid : string){
    return this.httpClient.get(
      `${this.url}/enroll/${userid}`, this.getHttpOptions()
    );
  }

  public getMaterialByCourseId(courseid : string){
    return this.httpClient.get(
      `${this.url}/course/detail/${courseid}`, this.getHttpOptions()
    );
  }
  public getEnrolledCourses(userid : string){
    return this.httpClient.get(
      `${this.url}/enroll/${userid}`, this.getHttpOptions()
    );
  }
  public getProgress(userid : string){
    return this.httpClient.get(
      `${this.url}/enroll/progress/${userid}`, this.getHttpOptions()
    );
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
      `${this.url}/course/${id}`
    );
  }

  public postForum(forum: Forum): Observable<any> {
    return this.httpClient.post(`${this.url}/forum/`, forum,
      this.getHttpOptions());
  }

  public getForums(): Observable<any> {
    return this.httpClient.get(`${this.url}/forum`,
      this.getHttpOptions());
  }

  public getTopCourse(): Observable<any> {
    return this.httpClient.get(
      `${this.url}/course/top/10`,
      this.getHttpOptions());
  }

  public getForumById(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}/forum/${id}`,
      this.getHttpOptions());
  }

  public postThread(thread: Thread): Observable<any> {
    return this.httpClient.post(`${this.url}/thread/`, thread,
      this.getHttpOptions());
  }

  public getThreadsByForumId(id: string): Observable<any> {
    return this.httpClient.get(`${this.url}/thread/forum/${id}`,
      this.getHttpOptions());
  }

  public postComment(comment: Comment): Observable<any> {
    console.log(comment);
    return this.httpClient.post(`${this.url}/comment`, comment,
      this.getHttpOptions());
  }

  public getCommentByThreadId(threadID: string): Observable<any> {
    return this.httpClient.get(`${this.url}/comment/${threadID}`,
      this.getHttpOptions());
  }

  public updateThread(thread: Thread): Observable<any> {
    return this.httpClient.post(`${this.url}/thread/update`, thread,
      this.getHttpOptions());
  }

  public getCoursesByCategoryId(categoryId: string): Observable<any> {
    return this.httpClient.get(`${this.url}/course/category/${categoryId}`, this.getHttpOptions());
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
