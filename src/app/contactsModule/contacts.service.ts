import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contacts } from './Class/contacts'
import { Students } from './Class/students'
import { Teachers } from './Class/teachers'
import { Parents } from './Class/parents'
import { AddNewList } from './Class/addNewList'
import { Groups } from './Class/groups'

@Injectable ()
export class ContactsService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private contactsUrl = 'api/contacts';
    private studentsUrl = 'api/students';
    private teachersUrl = 'api/teachers';
    private parentsUrl = 'api/parents';
    private addNewListUrl = 'api/addNewList';
    private groupsUrl = 'api/groups';

    selectedName: string;
    groupArray = [];

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error); 
    }

    constructor(private http: Http) {}

    getLastContacts(): Promise<Contacts[]> {
        return this.http.get(this.contactsUrl).toPromise()
               .then(response => response.json().data as Contacts[])
               .catch(this.handleError)
    }

    getStudentsList(): Promise<Students[]> {
        return this.http.get(this.studentsUrl).toPromise()
               .then(response => response.json().data as Students[])
               .catch(this.handleError)
    }

    getTeachersList(): Promise<Teachers[]> {
        return this.http.get(this.teachersUrl).toPromise()
               .then(response => response.json().data as Teachers[])
               .catch(this.handleError)
    }

    getParentsList(): Promise<Parents[]> {
        return this.http.get(this.parentsUrl).toPromise()
               .then(response => response.json().data as Parents[])
               .catch(this.handleError)
    }

    getAddNewList(): Promise<AddNewList[]> {
        return this.http.get(this.addNewListUrl).toPromise()
               .then(response => response.json().data as AddNewList[])
               .catch(this.handleError)
    }

    getGroupsList(): Promise<Groups[]> {
        return this.http.get(this.groupsUrl).toPromise()
               .then(response => response.json().data as Groups[])
               .catch(this.handleError)
    }
}