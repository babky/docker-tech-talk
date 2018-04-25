import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

    constructor(private http: HttpClient) { }

    fetchFromApi(): Observable<String> {
        return this.http.get('http://localhost:5000/', {responseType: 'text'}).map((result) => result.toString());
    }

}
