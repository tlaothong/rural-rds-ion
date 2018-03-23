import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../models/Project';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

/*
	Generated class for the ProjectRepoServiceProvider provider.

	See https://angular.io/guide/dependency-injection for more info on providers
	and Angular DI.
*/
@Injectable()
export class ProjectRepoServiceProvider {

	constructor(public http: HttpClient) {
		console.log('Hello ProjectRepoServiceProvider Provider');
	}

	public listAll(): Observable<Project[]> {
		return Observable.from([[
			new Project("โครงการตรวจสอบเส้นทางหมาย 123"),
			new Project("โครงการตรวจสอบเส้นทางหมาย 456")
		]]).map(it => it);
	}

}
