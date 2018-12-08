import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AuthService} from './components/auth/auth.service';
import { LoginModule } from './components/login/login.module';
import { TopicsComponent } from './components/routing-components/topics/topics.component';
import { BlogsComponent } from './components/routing-components/blogs/blogs.component';
import {AuthGuard } from './components/auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot([
      /*{path: '', redirectTo: '/login', pathMatch: 'full'},*/
      {path: 'topics', component: TopicsComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'blogs', component: BlogsComponent, pathMatch: 'full', canActivate: [AuthGuard]},
    ], {enableTracing: true})
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
