import { Component , OnInit } from '@angular/core';

import { ClassActivitiesMenu } from 'app/mutualActivity/interactiveClass/classActivitiesMenu';
import { HomeVisitsMenu } from 'app/mutualActivity/interactiveClass/homeVisitsMenu';
import { ParentMeetingMenu } from 'app/mutualActivity/interactiveClass/parentMeetingMenu';

import { InteractiveService }  from 'app/mutualActivity/interactice.service';


@Component({
	selector : 'interactive-home',
	templateUrl : './mutual-activity.component.html',
})


export class InteractiveComponent implements OnInit{
	classActivitiesMenu : ClassActivitiesMenu[];
	homeVisitsMenu : HomeVisitsMenu[];
	parentMeetingMenu : ParentMeetingMenu[];

	constructor(private interactiveService : InteractiveService){}
/*	homeVisitsMenu = HomeVisitsMenu;
	parentMeetingMenu = ParentMeetingMenu;*/
	//初始化的时候显示左面的菜单
	ngOnInit() : void {
		this.getClassActivitiesMenu();
		this.getHomeVisitsMenu();
		this.getParentMeetingMenu();
	}

	getClassActivitiesMenu():void{
		this.interactiveService.getClassActivitiesMenu().then(result => this.classActivitiesMenu = result);
	}

	getHomeVisitsMenu() : void {
		this.interactiveService.getHomeVisitsMenu().then(result => this.homeVisitsMenu = result);
	}

	getParentMeetingMenu() : void {
		this.interactiveService.getParentMeetingMenu().then(result => this.parentMeetingMenu = result);
	}
}