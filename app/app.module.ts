import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {CoursesComponent} from "./courses.component";
import {Chat} from './chat.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, CoursesComponent, Chat],
	bootstrap: [AppComponent]
})
export class AppModule {
}
