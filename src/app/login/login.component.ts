import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AppService } from '../app.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [AngularFireAuth]
   // animations: [routerTransition()]
})
export class LoginComponent implements OnInit {


  constructor(public app: AppService,public router: Router) { }

  ngOnInit() {
    
  }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
