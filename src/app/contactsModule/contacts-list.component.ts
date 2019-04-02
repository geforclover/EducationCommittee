import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core'

import { Contacts } from './Class/contacts'
import { Students } from './Class/students'
import { Parents } from './Class/parents'
import { Teachers } from './Class/teachers'

import { ContactsService } from './contacts.service'

@Component({
		selector: 'list',
		templateUrl: './contacts-list.component.html'
})

export class LastContactsComponent implements OnInit {
    contacts: Contacts[]
    students: Students[]
    teachers: Teachers[]
    parents: Parents[]

    openLast: boolean = false;
    openStudents: boolean = false;
    openTeachers: boolean = false;
    openParents: boolean = false;

    constructor (
        private contactsService: ContactsService
	  ) {}

	  getLastContacts(): void {
        this.contactsService.getLastContacts().then(contacts => this.contacts = contacts)
    }

    getStudentsList(): void {
        this.contactsService.getStudentsList().then(students => this.students = students)
    }

    getTeachersList(): void {
        this.contactsService.getTeachersList().then(teachers => this.teachers = teachers)
    }

    getParentsList(): void {
        this.contactsService.getParentsList().then(parents => this.parents = parents)
    }

    selectName(newName): void {
        this.contactsService.selectedName = newName
    }

    ngOnInit(): void {
        this.getLastContacts()
        this.getStudentsList()
        this.getTeachersList()
        this.getParentsList()
    }
}