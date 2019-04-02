import { Injectable } from '@angular/core';
import { Headers , Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

//公共类
import { ClassActivitiesMenu } from 'app/mutualActivity/interactiveClass/classActivitiesMenu';
import { HomeVisitsMenu } from 'app/mutualActivity/interactiveClass/homeVisitsMenu';
import { ParentMeetingMenu } from 'app/mutualActivity/interactiveClass/parentMeetingMenu';

@Injectable()
export class InteractiveService{

	constructor(private http : Http){}

	getClassActivitiesMenu() : Promise<ClassActivitiesMenu[]>{
		return this.http.get('api/classActivitiesMenu').toPromise()
		.then(result => result.json().data as ClassActivitiesMenu[])
		.catch(this.handleError);
	}

	getHomeVisitsMenu() : Promise<HomeVisitsMenu[]>{
		return this.http.get('api/homeVisitsMenu').toPromise()
		.then(result => result.json().data as HomeVisitsMenu[])
		.catch(this.handleError);
	} 

	getParentMeetingMenu() : Promise <ParentMeetingMenu[]>{
		return this.http.get('api/parentMeetingMenu').toPromise()
		.then(result => result.json().data as ParentMeetingMenu[])
		.catch(this.handleError);
	}

	private handleError(error : any) : Promise<any>{
		console.error("输出错误：",error);
		return Promise.reject(error.message || error);
	}
}