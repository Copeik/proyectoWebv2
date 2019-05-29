import { User } from './../model/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  header= new HttpHeaders();
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aWN0b3IifQ.4n0H6mj8uIwbY674h4sBT0VgESnpvJkJ_Iqb98To0wFc-_wayJflDBSF3SdxksMCHIVT_XM64Jckou54w6snPw";
  constructor(private http: HttpClient,private router:Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:8090/login`, { "usuario": username, "contrasena": password });

  };
  

  saveuser(username:string){
    this.header.append("Content-Type","application/json");
    return this.http.get<any>(`http://localhost:8090/v1/usuario?usuario=${username}`).subscribe(res =>{
      sessionStorage.setItem("Usuario",JSON.stringify(res));
      console.log("usuario guardado")
    });
  }
  guardarUsuario(body){
    return this.http.post<any>(`http://localhost:8090/v1/usuario`, body).subscribe(res =>{
      console.log(res);
    })
  }

  checkuser(username:string){
    return this.http.get<any>(`http://localhost:8090/v1/usuario?usuario=${username}`);
  }

  getuser(){
  var vi=sessionStorage.getItem("Usuario");
  if(vi==null || vi ==undefined){
    this.router.navigate(['login']);
  }
  }
  getUsuariosAdmin(){
    return this.http.get<any>(`http://localhost:8090/v1/usuarios`,{headers: this.header.append("Authorization","Bearer "+ this.token) });
  }

  getUsuario(nick){
    return this.http.get<any>(`http://localhost:8090/v1/usuario?usuario=`+nick,{headers: this.header.append("Authorization","Bearer "+ this.token) });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
