import { Component, OnInit } from '@angular/core'

import { Contacts } from './Class/contacts'
import { Students } from './Class/students'
import { Parents } from './Class/parents'
import { Teachers } from './Class/teachers'
import { Groups } from './Class/groups'

import { ContactsService } from './contacts.service'

@Component({
		selector: 'groups',
		templateUrl: './contacts-groups.component.html'
})

export class GroupsComponent implements OnInit {
    contacts: Contacts[]
    groups: Groups[]
    students: Students[]
    teachers: Teachers[]
    parents: Parents[]

    openLast: boolean = false
    openStudents: boolean = false
    openTeachers: boolean = false
    openParents: boolean = false
    created: boolean = false
    checkLastAll: boolean = false
    checkStudentsAll: boolean = false
    checkTeachersAll: boolean = false
    checkParentsAll: boolean = false

    constructor (
        private contactsService: ContactsService
	  ) {}

    getLastContacts(): void {
        this.contactsService.getLastContacts().then(contacts => this.contacts = contacts)
    }

    getGroupsList(): void {
         this.contactsService.getGroupsList().then(groups => this.groups = groups)
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

    createGroup(): void {
        this.openLast = true
        this.openStudents = true
        this.openTeachers = true
        this.openParents = true
    }

    ngOnInit(): void {
        this.getLastContacts()
        this.getGroupsList()
        this.getStudentsList()
        this.getTeachersList()
        this.getParentsList()
    }
}