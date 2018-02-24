import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Project, ProjectService} from './ProjectService';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project$: Observable<Project>;
  projectList: Observable<Project[]>;

  selectedId = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProjectService
  ) { }

  ngOnInit() {
    this.project$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getProject(params.get('id')));

    this.projectList = this.service.getProjects();
  }

  public onClick(id: number) {
    this.selectedId = id;
    this.router.navigate(['/project/' + id]);
  }

}
