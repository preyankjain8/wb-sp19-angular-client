import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import {CourseServiceClient} from './services/CourseServiceClient';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import {TopicServiceClient} from './services/TopicServiceClient';
import {WidgetServiceClient} from './services/WidgetServiceClient';
import {LessonServiceClient} from './services/LessonServiceClient';
import { ListWidgetComponent } from './list-widget/list-widget.component';
import { HeadingWidgetComponent } from './heading-widget/heading-widget.component';
import { ParagraphWidgetComponent } from './paragraph-widget/paragraph-widget.component';
import { ImageWidgetComponent } from './image-widget/image-widget.component';
import { LinkWidgetComponent } from './link-widget/link-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponent,
    ModuleListComponent,
    CourseDetailsComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    ListWidgetComponent,
    HeadingWidgetComponent,
    ParagraphWidgetComponent,
    ImageWidgetComponent,
    LinkWidgetComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [CourseServiceClient, ModuleServiceClient, LessonServiceClient, TopicServiceClient, WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
