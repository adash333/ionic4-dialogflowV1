import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {

  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = environment.token;

  constructor(private http: Http){}

  public getResponse(query: string){
    let data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    }
    return this.http
      .post(`${this.baseURL}`, data, {headers: this.getHeaders()}).pipe(
      map(res => {
        return res.json()
      }))
    }

  public getHeaders(){
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }

}

