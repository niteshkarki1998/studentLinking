import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { TutorComponent } from './tutor/tutor.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { FreeStudyComponent } from './free-study/free-study.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    AddBooksComponent,
    TutorComponent,
    DiscussionComponent,
    FreeStudyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
