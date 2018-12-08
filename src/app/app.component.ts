import {Component, OnInit} from '@angular/core';
import {AuthService} from './components/auth/auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) {}
  title = 'Angular Tutorials';

  ngOnInit() {
    this.isLoggedIn$ = this.authService.loggedIn$;
    this.isLoggedIn$.subscribe((flag) => {
      this.isLoggedIn = flag;
    });
  }
}
