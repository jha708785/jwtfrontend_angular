import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  private baseUrl='http://localhost:8082'

  constructor(private http:HttpClient) { }

authSubject=new BehaviorSubject<any>({
  user:null
})

login(userData:any):Observable<any>{
  return this.http.post<any>(`${this.baseUrl}/auth/login`,userData)
}


rigester(userData:any):Observable<any>{
  return this.http.post<any>(`${this.baseUrl}/auth/createuser`,userData)
}

getUserProfile():Observable<any>{
  const headers=new HttpHeaders({
    Authorization:`Bearer ${localStorage.getItem("jwt")}`
  })
  return this.http.get<any>(`${this.baseUrl}/api/profile`,{headers}).pipe(
    tap((user)=>{

      console.log('====================================');
      console.log("Usrer",user);
      console.log('====================================');
      const currentState=this.authSubject.value;
      this.authSubject.next({...currentState,user})
    })
  )
}

logout(){
  localStorage.clear()
  this.authSubject.next({})
}

}
