import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  UID = this.afAuth.authState.pipe(
    map(authState => {
      if(!authState)
      {
        return null;
      }else{
        return authState.uid;
      }
    }),
  );
  isAdmin = observableOf(true);
  constructor(private afAuth: AngularFireAuth) { }

  login()
  {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout()
  {
    this.afAuth.auth.signOut();
  }

  onSignInSubmit()
  {
    var recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': function(response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        'expired-callback': function() {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      });

        var phoneNumber = '9030670586'
        var appVerifier = recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
             var confirmationResult = confirmationResult;
            }).catch(function (error) {
            // Error; SMS not sent
            // ...
            });
  }


  get windowRef() {
    return window
  }
}
