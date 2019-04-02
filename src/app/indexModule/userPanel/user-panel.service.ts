import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable ()
export class UserService implements OnInit{
	  private headers = new Headers({'Content-Type': 'application/json'});

	  private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error); 
    }

	  constructor(private http: Http) {}

    check() {
        this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`) 
        .map(res => res.json()) 
        .subscribe(data => {
          if (data) console.log(data) 
        });
    }

    ngOnInit() {
         this.check()
    }
}