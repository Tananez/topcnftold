import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const URL =  'http://localhost/topnft-server/';


const token   =  window.localStorage.getItem('token');

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  heather = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  token   =  localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  getAll(url:any) {
    return this.http.get(URL+url, {headers: this.heather});
  }
  
  get(url:any) {
    return this.http.get(URL+url, {headers: this.heather});
  }

  post(url:any, data:any) {
    return this.http.post(URL+url, data , {headers: this.heather});
  }

  update(url:any, data:any) {
    return this.http.post(URL+url, data, {headers: this.heather});
  }

  delete(url:any) {
    return this.http.delete(URL+url, {headers: this.heather});
  } 
  deleteAll(url:any) {
    return this.http.delete(URL+url, {headers: this.heather});
  } 

  //JWT Token
  getToken(): String {
    return window.localStorage['token'];
  }

  saveToken(token: String) {
    window.localStorage['token'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('token');
  }
  
}
