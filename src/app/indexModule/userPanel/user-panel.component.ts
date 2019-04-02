import { Component, OnInit } from '@angular/core'
import { UserService } from './user-panel.service'

@Component({
    selector: 'user-panel',
    templateUrl: './user-panel.component.html'
})

export class UserPanelComponent implements OnInit{
		constructor(
		    private userService: UserService
		) {}

		ngOnInit() : void {

		}

    check(): void {
        this.userService.check()
    }
}
