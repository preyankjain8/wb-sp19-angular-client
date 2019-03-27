import { Routes, RouterModule } from '@angular/router';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
const appRoutes: Routes = [
  { path: 'course', component: CourseGridComponent },
  { path: 'course/:courseId/module', component: CourseDetailsComponent },
  { path: 'course/:courseId/module/:moduleId/lesson', component: CourseDetailsComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component: CourseDetailsComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: CourseDetailsComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
