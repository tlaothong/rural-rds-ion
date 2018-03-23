import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectRepoServiceProvider } from '../../providers/project-repo-service/project-repo-service';
import { Project } from '../../models/Project';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public projects: Observable<Project[]>;

	constructor(public navCtrl: NavController, prjs: ProjectRepoServiceProvider) {
		this.projects = prjs.listAll();
	}

	public newProject() {
		this.navCtrl.push('ProjectNewPage');
	}

}
