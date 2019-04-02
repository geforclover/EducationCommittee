import { Component, OnInit } from '@angular/core'

import { AddNewList } from './Class/addNewList'

import { ContactsService } from './contacts.service'

@Component({
		selector: 'addFriends',
		templateUrl: './contacts-add-friends.component.html'
})

export class AddFriendsComponent implements OnInit{
	  addNewList: AddNewList[]

	  constructor (
        private contactsService: ContactsService
	  ) {}

	  getAddNewList(): void {
        this.contactsService.getAddNewList().then(addNewList => this.addNewList = addNewList)
    }

    ngOnInit(): void {
        this.getAddNewList()
    }
}