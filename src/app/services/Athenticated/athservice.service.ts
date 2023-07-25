import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AthserviceService {
  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:3000/users';
  GetAll() {
    return this.http.get(this.apiUrl);
  }

  GetByCode(code: any) {
    return this.http.get(this.apiUrl + '/' + code);
  }

  GetAllRole() {
    return this.http.get('http://localhost:3000/roles');
  }

  //tiến hành đăng ký
  Proceedregister(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata);
  }

  //UpdateUser
  UpdateUser(code: any, inputdata: any) {
    console.log(code, inputdata);
    return this.http.put(this.apiUrl + '/' + code, inputdata); //sử dụng put
  }

  //Check loggedIn
  isLoggedIn() {
    return sessionStorage.getItem('userName') != null;
  }

  getUserRole() {
    //toán tử 3 ngôi
    return sessionStorage.getItem('userRole') != null
      ? sessionStorage.getItem('userRole')?.toString()
      : '';
  }
}
