import { Component, OnInit } from '@angular/core'

import { ContactsService } from './contacts.service'

@Component({
    selector: 'create-groups',
    templateUrl: './create-groups.component.html'
})

export class CreateGroupsComponent implements OnInit{
    tabsStatus: number = 1;

	  constructor (
        private contactsService: ContactsService
	  ) {}

    getTabsStatus(newStatus): number {
        this.tabsStatus = newStatus
        return this.tabsStatus
    }

    ngOnInit(): void {
        this.getTabsStatus(this.tabsStatus)
    }
}