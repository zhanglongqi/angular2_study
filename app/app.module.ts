import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {AppComponent}   from './app.component';
import {CoursesComponent} from "./courses.component";
import {Chat} from './chat.component';
import {CreateMessage} from './create-message.component'

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CoursesComponent, Chat, CreateMessage],
	bootstrap: [AppComponent]
})
export class AppModule {
}
