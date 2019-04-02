import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

import { ContactsService } from './contacts.service'

@Component({
    selector: 'contacts',
    templateUrl: './contacts.component.html'
})

export class ContactsComponent implements OnInit{
    tabsStatus: number = 1;

	  constructor (
	      private location: Location,
        private contactsService: ContactsService
	  ) {}

    getTabsStatus(newStatus): number {
        this.tabsStatus = newStatus
        return this.tabsStatus
    }
    
    goBack(): void {
        this.location.back()
    }

    ngOnInit(): void {
        this.getTabsStatus(this.tabsStatus)
    }
}