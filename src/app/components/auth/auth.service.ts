import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AuthService implements OnInit {
  constructor() {}
  public loggedIn = new BehaviorSubject<boolean>(true);
  loggedIn$ = this.loggedIn.asObservable();
  ngOnInit() {

  }
}
