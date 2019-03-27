import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnDestroy, OnInit {


  constructor(private service: ModuleServiceClient, private route: ActivatedRoute, private router: Router) { }
  subscription;
  modules = []
  courseId = {}
  selectedModule = {}
  moduleSelected = module => {
    this.selectedModule = module;
    this.router.navigate(['course/' + this.courseId + '/module/' + module.id + '/lesson']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.service
          .findModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);
      }
    )
    this.service
      .findModulesForCourse(this.courseId)
      .then(modules => this.modules = modules);
  }

}
