import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  get windowRef() {
    return window
  }
}
