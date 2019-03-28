import {AfterViewInit, Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit, OnChanges {


  constructor(private service: ModuleServiceClient, private route: ActivatedRoute, private router: Router) { }

  @Input()
  courseId;
  @Input()
  selectedModuleId;
  subscription;
  modules = []
  moduleSelected = module => {
    this.selectedModuleId = module.id;
    this.router.navigate(['course/' + this.courseId + '/module/' + module.id + '/lesson']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['courseId'] !== undefined) {
      this.courseId = changes['courseId'].currentValue;
    }
    if (changes['selectedModuleId'] !== undefined){
      this.selectedModuleId = changes['selectedModuleId'].currentValue;
    }
  }

  ngOnInit() {
    console.log(this.selectedModuleId);
    this.service
      .findModulesForCourse(this.courseId)
      .then(modules => this.modules = modules);
  }

}
