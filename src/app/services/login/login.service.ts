import { Injectable } from '@angular/core';
import { InterceptorService } from 'ng2-interceptors';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:InterceptorService) { }

  public checkAuth(username:String,password:string):any{
     this.http.get("").toPromise()
     .then(response => response.json()  )
     .catch(this.handleError); 
  }

  private handleError(error: any): Promise<any> {
    console.error('发生错误', error); 
    return Promise.reject(error.message || error);
  }
}
